import { NextRequest } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export async function GET(request: NextRequest) {
  try {
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return Response.json({ error: "Database not configured" }, { status: 503 });
    }
    
    const searchParams = request.nextUrl.searchParams;
    const refCode = searchParams.get('ref');

    if (!refCode) {
      return Response.json({ error: "Reference code required" }, { status: 400 });
    }

    // Get payout history (in real system, this would be from a payouts table)
    // For now, we'll generate mock payout data based on sales history
    const { data: salesData, error } = await supabase
      .from("referrals")
      .select("amount, created_at")
      .eq("ref_code", refCode)
      .eq("event", "sale")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Sales data error:", error);
      return Response.json({ error: "Database error" }, { status: 500 });
    }

    // Group sales by month and simulate payouts
    const monthlyPayouts = new Map();
    salesData?.forEach(sale => {
      const date = new Date(sale.created_at);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      
      if (!monthlyPayouts.has(monthKey)) {
        monthlyPayouts.set(monthKey, {
          month: monthKey,
          sales: 0,
          commission: 0,
          status: 'pending' as const
        });
      }
      
      const payout = monthlyPayouts.get(monthKey);
      payout.sales += sale.amount || 0;
      payout.commission += (sale.amount || 0) * 0.15;
    });

    // Convert to array and mark older months as paid
    const payouts = Array.from(monthlyPayouts.values()).map(payout => {
      const payoutDate = new Date(payout.month + '-15'); // 15th of the month
      const now = new Date();
      const daysDiff = (now.getTime() - payoutDate.getTime()) / (1000 * 60 * 60 * 24);
      
      return {
        ...payout,
        status: daysDiff > 30 ? 'paid' : 'pending',
        payout_date: daysDiff > 30 ? new Date(payoutDate.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString() : null,
        payment_method: 'PayPal',
        transaction_id: daysDiff > 30 ? `HM_${payout.month.replace('-', '')}_${Math.random().toString(36).substr(2, 8).toUpperCase()}` : null
      };
    }).sort((a, b) => b.month.localeCompare(a.month));

    // Calculate totals
    const totalPaid = payouts
      .filter(p => p.status === 'paid')
      .reduce((sum, p) => sum + p.commission, 0);
    
    const totalPending = payouts
      .filter(p => p.status === 'pending')
      .reduce((sum, p) => sum + p.commission, 0);

    return Response.json({
      payouts,
      summary: {
        total_paid: totalPaid,
        total_pending: totalPending,
        total_commission: totalPaid + totalPending,
        commission_rate: 15,
        next_payout_date: getNextPayoutDate()
      }
    });

  } catch (error) {
    console.error("Payout history API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

function getNextPayoutDate(): string {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 15);
  return nextMonth.toISOString();
}
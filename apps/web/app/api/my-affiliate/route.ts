import { NextRequest } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";
import { getAffiliateStats } from "@/lib/affiliate";

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

    // Get affiliate info
    const { data: affiliate, error: affiliateError } = await supabase
      .from("affiliate_codes")
      .select("*")
      .eq("ref_code", refCode)
      .single();

    if (affiliateError || !affiliate) {
      return Response.json({ error: "Affiliate not found" }, { status: 404 });
    }

    // Get detailed stats
    const stats = await getAffiliateStats(refCode);

    // Get recent activity
    const { data: recentActivity, error: activityError } = await supabase
      .from("referrals")
      .select("*")
      .eq("ref_code", refCode)
      .order("created_at", { ascending: false })
      .limit(20);

    if (activityError) {
      console.error("Activity fetch error:", activityError);
    }

    // Calculate commission (15% of sales)
    const totalCommission = stats.totalSales * 0.15;
    const pendingCommission = totalCommission; // Simplified - in real system, track paid vs pending

    // Get monthly breakdown
    const { data: monthlyData, error: monthlyError } = await supabase
      .from("referrals")
      .select("amount, created_at")
      .eq("ref_code", refCode)
      .eq("event", "sale")
      .order("created_at", { ascending: true });

    let monthlyBreakdown: any[] = [];
    if (monthlyData && !monthlyError) {
      const monthlyMap = new Map();
      monthlyData.forEach(item => {
        const month = new Date(item.created_at).toISOString().slice(0, 7); // YYYY-MM
        monthlyMap.set(month, (monthlyMap.get(month) || 0) + (item.amount || 0));
      });
      monthlyBreakdown = Array.from(monthlyMap.entries()).map(([month, amount]) => ({
        month,
        sales: amount,
        commission: amount * 0.15
      }));
    }

    return Response.json({
      affiliate: {
        ref_code: refCode,
        created_at: affiliate.created_at,
        user_id: affiliate.user_id
      },
      stats,
      commission: {
        total: totalCommission,
        pending: pendingCommission,
        paid: 0,
        rate: 15
      },
      recentActivity: recentActivity || [],
      monthlyBreakdown,
      performance: {
        tier: getTier(stats.totalSales),
        nextTierThreshold: getNextTierThreshold(stats.totalSales)
      }
    });

  } catch (error) {
    console.error("My affiliate API error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}

function getTier(totalSales: number): string {
  if (totalSales >= 5000) return "VIP";
  if (totalSales >= 1000) return "Gold";
  if (totalSales >= 500) return "Silver";
  if (totalSales >= 100) return "Bronze";
  return "Starter";
}

function getNextTierThreshold(totalSales: number): number | null {
  if (totalSales < 100) return 100;
  if (totalSales < 500) return 500;
  if (totalSales < 1000) return 1000;
  if (totalSales < 5000) return 5000;
  return null; // Already at top tier
}
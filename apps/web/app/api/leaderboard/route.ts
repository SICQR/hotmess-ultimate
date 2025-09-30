import { NextRequest } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

export async function GET() {
  try {
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return Response.json({ error: "Database not configured" }, { status: 503 });
    }
    
    // Get top 20 affiliates by total sales
    const { data: topAffiliates, error } = await supabase
      .rpc('get_affiliate_leaderboard');

    if (error) {
      console.error("Database error:", error);
      return Response.json({ error: "Database error" }, { status: 500 });
    }

    // Format the leaderboard data
    const leaderboard = topAffiliates?.map((affiliate: any, index: number) => ({
      rank: index + 1,
      ref_code: affiliate.ref_code,
      total_sales: parseFloat(affiliate.total_sales || 0),
      total_referrals: parseInt(affiliate.total_referrals || 0),
      conversion_rate: Math.round((affiliate.sales_count / Math.max(affiliate.total_referrals, 1)) * 100),
      last_sale: affiliate.last_sale,
      tier: getTier(parseFloat(affiliate.total_sales || 0))
    })) || [];

    return Response.json({
      leaderboard,
      updated_at: new Date().toISOString(),
      total_affiliates: leaderboard.length
    });

  } catch (error) {
    console.error("Leaderboard API error:", error);
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
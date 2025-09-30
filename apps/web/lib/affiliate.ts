import { getSupabaseServerClient } from "./supabaseServer";
import { sendTelegramMessage, sendAffiliateAlert } from "./telegram";

export interface ReferralEvent {
  ref_code: string;
  user_id?: string;
  event: string;
  amount?: number;
  product?: string;
  metadata?: any;
}

export async function trackReferral(data: ReferralEvent) {
  try {
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      console.warn("Database not configured, skipping referral tracking");
      return null;
    }
    
    // Insert referral event into database
    const { data: referral, error } = await supabase
      .from("referrals")
      .insert({
        ref_code: data.ref_code,
        user_id: data.user_id,
        event: data.event,
        amount: data.amount,
        product: data.product,
        metadata: data.metadata
      })
      .select()
      .single();

    if (error) {
      console.error("Error tracking referral:", error);
      throw error;
    }

    // Send Telegram notification for sales
    if (data.event === "sale" && data.amount) {
      await sendAffiliateAlert("sale", {
        ref: data.ref_code,
        amount: data.amount,
        product: data.product || "Unknown"
      });
    }

    // Check for milestones
    await checkMilestones(data.ref_code);

    return referral;
  } catch (error) {
    console.error("Failed to track referral:", error);
    throw error;
  }
}

export async function generateReferralCode(userId: string): Promise<string> {
  // Generate a unique referral code
  const code = `HM${Date.now().toString(36).toUpperCase()}`;
  
  try {
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      console.warn("Database not configured, returning generated code");
      return code;
    }
    
    const { error } = await supabase
      .from("affiliate_codes")
      .insert({
        user_id: userId,
        ref_code: code,
        created_at: new Date().toISOString()
      });

    if (error) throw error;
    
    await sendTelegramMessage(
      `New affiliate joined: \`${code}\`\nWelcome to the HOTMESS affiliate program!`, 
      "signup"
    );
    
    return code;
  } catch (error) {
    console.error("Failed to generate referral code:", error);
    throw error;
  }
}

export async function getAffiliateStats(refCode: string) {
  try {
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return {
        totalSales: 0,
        totalReferrals: 0,
        conversionRate: 0,
        recentEvents: []
      };
    }
    
    const { data, error } = await supabase
      .from("referrals")
      .select("*")
      .eq("ref_code", refCode);

    if (error) throw error;

    const totalSales = data
      .filter(r => r.event === "sale" && r.amount)
      .reduce((sum, r) => sum + (r.amount || 0), 0);

    const totalReferrals = data.length;
    const conversionRate = data.filter(r => r.event === "sale").length / Math.max(data.filter(r => r.event === "click").length, 1);

    return {
      totalSales,
      totalReferrals,
      conversionRate: Math.round(conversionRate * 100),
      recentEvents: data.slice(-10)
    };
  } catch (error) {
    console.error("Failed to get affiliate stats:", error);
    throw error;
  }
}

export async function checkMilestones(refCode: string) {
  try {
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return;
    }
    
    const stats = await getAffiliateStats(refCode);
    const milestones = [
      { threshold: 100, name: "First £100 in sales" },
      { threshold: 500, name: "£500 sales milestone" },
      { threshold: 1000, name: "£1000 sales milestone" },
      { threshold: 5000, name: "£5000 VIP status" }
    ];

    for (const milestone of milestones) {
      if (stats.totalSales >= milestone.threshold) {
        // Check if we've already sent this milestone notification
        const { data: existing } = await supabase
          .from("milestone_notifications")
          .select("*")
          .eq("ref_code", refCode)
          .eq("milestone", milestone.threshold)
          .single();

        if (!existing) {
          await sendAffiliateAlert("milestone", {
            ref: refCode,
            milestone: milestone.name,
            total: stats.totalSales
          });

          // Record that we sent this notification
          await supabase
            .from("milestone_notifications")
            .insert({
              ref_code: refCode,
              milestone: milestone.threshold,
              sent_at: new Date().toISOString()
            });
        }
      }
    }
  } catch (error) {
    console.error("Failed to check milestones:", error);
  }
}

export async function updateLeaderboard() {
  try {
    await sendTelegramMessage(
      "🏆 **LEADERBOARD UPDATED**\n\nCheck the latest affiliate rankings at /affiliate/leaderboard\n\nTop performers this month are crushing it! 💪", 
      "leaderboard"
    );
  } catch (error) {
    console.error("Failed to send leaderboard update:", error);
  }
}
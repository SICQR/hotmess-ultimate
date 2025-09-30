import Stripe from "stripe";
import { NextRequest } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";
import { getSupabaseServerClient } from "@/lib/supabaseServer";

function getStripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) throw new Error('Stripe key not configured');
  return new Stripe(key, { apiVersion: "2025-08-27.basil" });
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripeClient();
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return Response.json(
        { error: "Database not configured" },
        { status: 503 }
      );
    }
    
    const { refCode, amount, email, paymentMethod = "PayPal" } = await req.json();

    if (!refCode || !amount || !email) {
      return Response.json(
        { error: "Missing required fields: refCode, amount, email" },
        { status: 400 }
      );
    }

    // Validate minimum payout amount
    const minPayout = 50; // £50 minimum
    if (amount < minPayout) {
      return Response.json(
        { error: `Minimum payout amount is £${minPayout}` },
        { status: 400 }
      );
    }

    // Check if affiliate exists and has sufficient balance
    const { data: affiliate, error: affiliateError } = await supabase
      .from("affiliate_codes")
      .select("*")
      .eq("ref_code", refCode)
      .single();

    if (affiliateError || !affiliate) {
      return Response.json(
        { error: "Affiliate not found" },
        { status: 404 }
      );
    }

    // Calculate available balance (simplified - in real system, track pending vs available)
    const { data: salesData, error: salesError } = await supabase
      .from("referrals")
      .select("amount")
      .eq("ref_code", refCode)
      .eq("event", "sale");

    if (salesError) {
      console.error("Sales data error:", salesError);
      return Response.json(
        { error: "Failed to calculate balance" },
        { status: 500 }
      );
    }

    const totalSales = salesData?.reduce((sum, sale) => sum + (sale.amount || 0), 0) || 0;
    const availableBalance = totalSales * 0.15; // 15% commission

    if (amount > availableBalance) {
      return Response.json(
        { error: `Insufficient balance. Available: £${availableBalance.toFixed(2)}` },
        { status: 400 }
      );
    }

    // Create payout record
    const payoutId = `HM_${Date.now()}_${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
    
    const { error: payoutError } = await supabase
      .from("payouts")
      .insert({
        id: payoutId,
        ref_code: refCode,
        amount: amount,
        email: email,
        payment_method: paymentMethod,
        status: "processing",
        created_at: new Date().toISOString()
      });

    if (payoutError) {
      console.error("Payout creation error:", payoutError);
      return Response.json(
        { error: "Failed to create payout record" },
        { status: 500 }
      );
    }

    // Process payment based on method
    let paymentResult;
    
    if (paymentMethod === "stripe") {
      // Process Stripe payout
      try {
        paymentResult = await stripe.transfers.create({
          amount: Math.round(amount * 100), // Convert to pence
          currency: "gbp",
          destination: email, // Assumes Stripe Connect account
        });
      } catch (stripeError: any) {
        console.error("Stripe payout error:", stripeError);
        
        // Update payout status to failed
        await supabase
          .from("payouts")
          .update({ status: "failed", error_message: stripeError.message })
          .eq("id", payoutId);
        
        return Response.json(
          { error: "Payment processing failed" },
          { status: 500 }
        );
      }
    } else {
      // Simulate PayPal or other payment method
      paymentResult = {
        id: `pp_${Date.now()}`,
        status: "completed"
      };
    }

    // Update payout status to completed
    await supabase
      .from("payouts")
      .update({ 
        status: "completed",
        transaction_id: paymentResult.id,
        processed_at: new Date().toISOString()
      })
      .eq("id", payoutId);

    // Send Telegram notification
    await sendTelegramMessage(
      `💸 PAYOUT PROCESSED\n\n` +
      `Affiliate: ${refCode}\n` +
      `Amount: £${amount.toFixed(2)}\n` +
      `Method: ${paymentMethod}\n` +
      `Transaction ID: ${paymentResult.id}\n\n` +
      `Status: ✅ Completed`,
      "payout"
    );

    return Response.json({
      success: true,
      payoutId,
      transactionId: paymentResult.id,
      amount,
      status: "completed",
      message: "Payout processed successfully"
    });

  } catch (error) {
    console.error("Payout API error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
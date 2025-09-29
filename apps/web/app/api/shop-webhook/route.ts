import { NextRequest } from "next/server";
import { trackReferral } from "@/lib/affiliate";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Verify webhook signature if needed
    const signature = request.headers.get('x-webhook-signature');
    if (!verifyWebhookSignature(body, signature)) {
      return Response.json({ error: "Invalid signature" }, { status: 401 });
    }

    const { 
      event, 
      ref_code, 
      amount, 
      product_name, 
      customer_email, 
      order_id,
      user_id 
    } = body;

    if (!ref_code) {
      return Response.json({ error: "Reference code required" }, { status: 400 });
    }

    // Track the referral event
    await trackReferral({
      ref_code,
      user_id,
      event,
      amount: amount ? parseFloat(amount) : undefined,
      product: product_name,
      metadata: {
        customer_email,
        order_id,
        timestamp: new Date().toISOString()
      }
    });

    return Response.json({ 
      success: true, 
      message: "Referral tracked successfully" 
    });

  } catch (error) {
    console.error("Shop webhook error:", error);
    return Response.json({ 
      error: "Internal server error" 
    }, { status: 500 });
  }
}

function verifyWebhookSignature(body: any, signature: string | null): boolean {
  // In production, implement proper webhook signature verification
  // For development, we'll allow any signature or no signature
  if (process.env.NODE_ENV === 'development') {
    return true;
  }
  
  // Implement HMAC verification using your webhook secret
  const expectedSignature = process.env.WEBHOOK_SECRET;
  return signature === expectedSignature;
}

// Handle GET requests for webhook testing
export async function GET() {
  return Response.json({ 
    message: "HOTMESS Shop Webhook Endpoint",
    timestamp: new Date().toISOString(),
    version: "1.0"
  });
}
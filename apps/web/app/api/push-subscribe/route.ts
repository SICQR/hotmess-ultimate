import { NextRequest } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// POST: Subscribe/Create a push subscription
export async function POST(req: NextRequest) {
  try {
    const { userId, subscription } = await req.json();

    if (!userId || !subscription) {
      return Response.json(
        { error: "userId and subscription are required" },
        { status: 400 }
      );
    }

    // Store subscription in DB
    const { data, error } = await supabase
      .from("push_subscriptions")
      .upsert({
        user_id: userId,
        endpoint: subscription.endpoint,
        p256dh_key: subscription.keys.p256dh,
        auth_key: subscription.keys.auth,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'user_id'
      })
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return Response.json(
        { error: "Failed to store subscription" },
        { status: 500 }
      );
    }

    return Response.json({ 
      status: "subscribed",
      subscription: data
    }, { 
      headers: { "Content-Type": "application/json" } 
    });
  } catch (error) {
    console.error("Push subscribe error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET: Pull/Retrieve push subscriptions
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return Response.json(
        { error: "userId parameter is required" },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from("push_subscriptions")
      .select("*")
      .eq("user_id", userId);

    if (error) {
      console.error("Database error:", error);
      return Response.json(
        { error: "Failed to retrieve subscriptions" },
        { status: 500 }
      );
    }

    return Response.json({ 
      subscriptions: data || []
    });
  } catch (error) {
    console.error("Push pull error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// PUT: Merge/Update a push subscription
export async function PUT(req: NextRequest) {
  try {
    const { userId, subscription } = await req.json();

    if (!userId || !subscription) {
      return Response.json(
        { error: "userId and subscription are required" },
        { status: 400 }
      );
    }

    // Update existing subscription
    const { data, error } = await supabase
      .from("push_subscriptions")
      .update({
        endpoint: subscription.endpoint,
        p256dh_key: subscription.keys.p256dh,
        auth_key: subscription.keys.auth,
        updated_at: new Date().toISOString()
      })
      .eq("user_id", userId)
      .select()
      .single();

    if (error) {
      console.error("Database error:", error);
      return Response.json(
        { error: "Failed to update subscription" },
        { status: 500 }
      );
    }

    return Response.json({ 
      status: "merged",
      subscription: data
    });
  } catch (error) {
    console.error("Push merge error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// DELETE: Unsubscribe/Remove a push subscription
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return Response.json(
        { error: "userId parameter is required" },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("push_subscriptions")
      .delete()
      .eq("user_id", userId);

    if (error) {
      console.error("Database error:", error);
      return Response.json(
        { error: "Failed to delete subscription" },
        { status: 500 }
      );
    }

    return Response.json({ 
      status: "unsubscribed"
    });
  } catch (error) {
    console.error("Push unsubscribe error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
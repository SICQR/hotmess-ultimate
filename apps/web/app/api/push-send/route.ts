import { NextRequest } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabaseServer';
import webpush from 'web-push';

function configureWebPush() {
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  
  if (publicKey && privateKey) {
    webpush.setVapidDetails(
      'mailto:admin@hotmess.radio',
      publicKey,
      privateKey
    );
  }
}

configureWebPush();

export async function POST(req: NextRequest) {
  try {
    const supabase = getSupabaseServerClient();
    if (!supabase) {
      return Response.json({ error: "Database not configured" }, { status: 503 });
    }
    
    const { title, body, userId, icon, url } = await req.json();

    let subscriptions;

    if (userId) {
      // Send to specific user
      const { data, error } = await supabase
        .from("push_subscriptions")
        .select("*")
        .eq("user_id", userId);

      if (error) {
        console.error("Database error:", error);
        return Response.json(
          { error: "Failed to get subscriptions" },
          { status: 500 }
        );
      }

      subscriptions = data;
    } else {
      // Send to all users
      const { data, error } = await supabase
        .from("push_subscriptions")
        .select("*");

      if (error) {
        console.error("Database error:", error);
        return Response.json(
          { error: "Failed to get subscriptions" },
          { status: 500 }
        );
      }

      subscriptions = data;
    }

    const payload = JSON.stringify({
      title,
      body,
      icon: icon || '/logo-kinetic.svg',
      badge: '/logo-kinetic.svg',
      url: url || '/',
      timestamp: Date.now()
    });

    const sendPromises = subscriptions.map(async (sub) => {
      try {
        const pushSubscription = {
          endpoint: sub.endpoint,
          keys: {
            p256dh: sub.p256dh_key,
            auth: sub.auth_key
          }
        };

        await webpush.sendNotification(pushSubscription, payload);
        return { success: true, userId: sub.user_id };
      } catch (error: any) {
        console.error(`Failed to send notification to user ${sub.user_id}:`, error);
        
        // If subscription is invalid, remove it
        if (error.statusCode === 410) {
          await supabase
            .from("push_subscriptions")
            .delete()
            .eq("user_id", sub.user_id);
        }
        
        return { success: false, userId: sub.user_id, error: error.message };
      }
    });

    const results = await Promise.all(sendPromises);
    const successful = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;

    return Response.json({
      status: "sent",
      successful,
      failed,
      total: subscriptions.length,
      details: results
    }, {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Push send error:", error);
    return Response.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
// Type definition for custom push subscription
export interface CustomPushSubscription {
  endpoint: string;
  keys: {
    auth: string;
    p256dh: string;
  };
}

// Subscribe to push notifications (POST)
export async function subscribeToPush(userId: string, subscription: any) {
  const response = await fetch("/api/push-subscribe", {
    method: "POST",
    body: JSON.stringify({ userId, subscription }),
    headers: { "Content-Type": "application/json" }
  });
  return response.json();
}

// Pull/Get user's push subscriptions (GET)
export async function getPushSubscriptions(userId: string) {
  const response = await fetch(`/api/push-subscribe?userId=${userId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  return response.json();
}

// Merge/Update push subscription (PUT)
export async function updatePushSubscription(userId: string, subscription: any) {
  const response = await fetch("/api/push-subscribe", {
    method: "PUT",
    body: JSON.stringify({ userId, subscription }),
    headers: { "Content-Type": "application/json" }
  });
  return response.json();
}

// Unsubscribe from push notifications (DELETE)
export async function unsubscribeFromPush(userId: string) {
  const response = await fetch(`/api/push-subscribe?userId=${userId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  });
  return response.json();
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!('Notification' in window)) {
    throw new Error('This browser does not support notifications');
  }

  if (Notification.permission === 'granted') {
    return 'granted';
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission;
  }

  return Notification.permission;
}

export async function getNotificationSubscription(): Promise<CustomPushSubscription | null> {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    return null;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    return subscription as CustomPushSubscription | null;
  } catch (error) {
    console.error('Failed to get notification subscription:', error);
    return null;
  }
}

export async function createNotificationSubscription(userId: string): Promise<CustomPushSubscription | null> {
  try {
    const permission = await requestNotificationPermission();
    if (permission !== 'granted') {
      throw new Error('Notification permission denied');
    }

    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
    });

    const customSub: CustomPushSubscription = {
      endpoint: subscription.endpoint,
      keys: {
        auth: subscription.getKey('auth') ? btoa(String.fromCharCode(...new Uint8Array(subscription.getKey('auth')!))) : '',
        p256dh: subscription.getKey('p256dh') ? btoa(String.fromCharCode(...new Uint8Array(subscription.getKey('p256dh')!))) : ''
      }
    };

    await subscribeToPush(userId, customSub);
    return customSub;
  } catch (error) {
    console.error('Failed to create notification subscription:', error);
    return null;
  }
}

export function showLocalNotification(title: string, options?: NotificationOptions) {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      icon: '/logo-kinetic.svg',
      badge: '/logo-kinetic.svg',
      ...options
    });
  }
}
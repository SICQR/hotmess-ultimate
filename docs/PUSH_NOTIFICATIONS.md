# Push Notification API - Complete CRUD Operations

This document describes the complete push notification system with support for **push** (create), **pull** (read), **merge** (update), and **delete** operations.

## API Endpoints

### POST /api/push-subscribe - Subscribe (Push)
Create or update a push notification subscription for a user.

**Request:**
```json
{
  "userId": "user123",
  "subscription": {
    "endpoint": "https://fcm.googleapis.com/fcm/send/...",
    "keys": {
      "p256dh": "base64-encoded-key",
      "auth": "base64-encoded-key"
    }
  }
}
```

**Response:**
```json
{
  "status": "subscribed",
  "subscription": {
    "id": "uuid",
    "user_id": "user123",
    "endpoint": "https://fcm.googleapis.com/fcm/send/...",
    "p256dh_key": "base64-encoded-key",
    "auth_key": "base64-encoded-key",
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T00:00:00Z"
  }
}
```

### GET /api/push-subscribe?userId={userId} - Pull (Read)
Retrieve all push subscriptions for a specific user.

**Request:**
```
GET /api/push-subscribe?userId=user123
```

**Response:**
```json
{
  "subscriptions": [
    {
      "id": "uuid",
      "user_id": "user123",
      "endpoint": "https://fcm.googleapis.com/fcm/send/...",
      "p256dh_key": "base64-encoded-key",
      "auth_key": "base64-encoded-key",
      "created_at": "2025-01-01T00:00:00Z",
      "updated_at": "2025-01-01T00:00:00Z"
    }
  ]
}
```

### PUT /api/push-subscribe - Merge (Update)
Update an existing push subscription for a user.

**Request:**
```json
{
  "userId": "user123",
  "subscription": {
    "endpoint": "https://fcm.googleapis.com/fcm/send/new-endpoint",
    "keys": {
      "p256dh": "new-base64-encoded-key",
      "auth": "new-base64-encoded-key"
    }
  }
}
```

**Response:**
```json
{
  "status": "merged",
  "subscription": {
    "id": "uuid",
    "user_id": "user123",
    "endpoint": "https://fcm.googleapis.com/fcm/send/new-endpoint",
    "p256dh_key": "new-base64-encoded-key",
    "auth_key": "new-base64-encoded-key",
    "created_at": "2025-01-01T00:00:00Z",
    "updated_at": "2025-01-01T12:00:00Z"
  }
}
```

### DELETE /api/push-subscribe?userId={userId} - Unsubscribe
Remove all push subscriptions for a user.

**Request:**
```
DELETE /api/push-subscribe?userId=user123
```

**Response:**
```json
{
  "status": "unsubscribed"
}
```

## Client-Side Usage

### Using the lib/push.ts functions

```typescript
import { 
  subscribeToPush, 
  getPushSubscriptions, 
  updatePushSubscription, 
  unsubscribeFromPush 
} from '@/lib/push';

// Subscribe to push notifications
const subscription = {
  endpoint: "https://fcm.googleapis.com/fcm/send/...",
  keys: {
    p256dh: "base64-encoded-key",
    auth: "base64-encoded-key"
  }
};
await subscribeToPush("user123", subscription);

// Pull/Get subscriptions
const result = await getPushSubscriptions("user123");
console.log(result.subscriptions);

// Merge/Update subscription
const newSubscription = {
  endpoint: "https://fcm.googleapis.com/fcm/send/new-endpoint",
  keys: {
    p256dh: "new-base64-encoded-key",
    auth: "new-base64-encoded-key"
  }
};
await updatePushSubscription("user123", newSubscription);

// Unsubscribe
await unsubscribeFromPush("user123");
```

## Database Schema

The `push_subscriptions` table:

```sql
create table public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id text unique not null,
  endpoint text not null,
  p256dh_key text not null,
  auth_key text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

## Features

✅ **Push (Create)**: POST endpoint creates new subscriptions with upsert support
✅ **Pull (Read)**: GET endpoint retrieves user subscriptions
✅ **Merge (Update)**: PUT endpoint updates existing subscriptions
✅ **Delete**: DELETE endpoint removes user subscriptions
✅ **Error Handling**: Comprehensive error handling with proper HTTP status codes
✅ **Type Safety**: TypeScript types for all operations
✅ **Database Integration**: Supabase integration with proper table structure

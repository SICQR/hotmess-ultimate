# Push Notification Examples

This directory contains example code demonstrating how to use the push notification CRUD operations.

## Files

- `push-notifications.ts` - Complete examples of push, pull, merge, and delete operations

## Usage

Import the examples in your code:

```typescript
import { pushNotificationExamples } from './examples/push-notifications';

// Run a complete workflow
await pushNotificationExamples.completeWorkflow('user123');

// Or use individual operations
await pushNotificationExamples.subscribe('user123');
await pushNotificationExamples.getSubscriptions('user123');
await pushNotificationExamples.updateSubscription('user123');
await pushNotificationExamples.unsubscribe('user123');
```

## API Operations Covered

1. **PUSH (Create/Subscribe)** - `subscribeToPush()`
2. **PULL (Read)** - `getPushSubscriptions()`
3. **MERGE (Update)** - `updatePushSubscription()`
4. **DELETE (Unsubscribe)** - `unsubscribeFromPush()`

## Requirements

- Supabase database with `push_subscriptions` table (see `/supabase/migrations/0003_push_subscriptions.sql`)
- Valid VAPID keys configured in environment variables
- Service worker registered for push notifications

See `/docs/PUSH_NOTIFICATIONS.md` for detailed API documentation.

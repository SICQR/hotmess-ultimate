/**
 * Example usage of Push Notification CRUD operations
 * 
 * This file demonstrates how to use the push, pull, merge, and delete
 * operations for managing push notification subscriptions.
 */

import {
  subscribeToPush,
  getPushSubscriptions,
  updatePushSubscription,
  unsubscribeFromPush,
  createNotificationSubscription,
  type CustomPushSubscription
} from '../lib/push';

/**
 * Example 1: Subscribe to push notifications (PUSH)
 * Creates a new subscription or updates an existing one
 */
export async function exampleSubscribe(userId: string) {
  try {
    // Option A: Use the high-level function that handles browser permissions
    const subscription = await createNotificationSubscription(userId);
    if (subscription) {
      console.log('Successfully subscribed:', subscription);
    }

    // Option B: Subscribe with a pre-existing subscription object
    const customSub: CustomPushSubscription = {
      endpoint: 'https://fcm.googleapis.com/fcm/send/example',
      keys: {
        p256dh: 'example-p256dh-key',
        auth: 'example-auth-key'
      }
    };
    const result = await subscribeToPush(userId, customSub);
    console.log('Subscription result:', result);
  } catch (error) {
    console.error('Failed to subscribe:', error);
  }
}

/**
 * Example 2: Retrieve user subscriptions (PULL)
 * Gets all subscriptions for a specific user
 */
export async function exampleGetSubscriptions(userId: string) {
  try {
    const result = await getPushSubscriptions(userId);
    console.log('User subscriptions:', result.subscriptions);
    
    // Check if user has any active subscriptions
    if (result.subscriptions && result.subscriptions.length > 0) {
      console.log(`User has ${result.subscriptions.length} active subscription(s)`);
      return result.subscriptions;
    } else {
      console.log('User has no active subscriptions');
      return [];
    }
  } catch (error) {
    console.error('Failed to get subscriptions:', error);
    return [];
  }
}

/**
 * Example 3: Update existing subscription (MERGE)
 * Updates the subscription details for a user
 */
export async function exampleUpdateSubscription(userId: string) {
  try {
    const newSubscription: CustomPushSubscription = {
      endpoint: 'https://fcm.googleapis.com/fcm/send/updated-endpoint',
      keys: {
        p256dh: 'updated-p256dh-key',
        auth: 'updated-auth-key'
      }
    };

    const result = await updatePushSubscription(userId, newSubscription);
    console.log('Subscription updated:', result);
    return result;
  } catch (error) {
    console.error('Failed to update subscription:', error);
  }
}

/**
 * Example 4: Unsubscribe from push notifications (DELETE)
 * Removes all subscriptions for a user
 */
export async function exampleUnsubscribe(userId: string) {
  try {
    const result = await unsubscribeFromPush(userId);
    console.log('Unsubscribed successfully:', result);
    return result;
  } catch (error) {
    console.error('Failed to unsubscribe:', error);
  }
}

/**
 * Example 5: Complete workflow
 * Demonstrates a typical push notification lifecycle
 */
export async function exampleCompleteWorkflow(userId: string) {
  console.log('=== Push Notification Complete Workflow ===\n');

  // Step 1: Subscribe
  console.log('Step 1: Subscribing to push notifications...');
  await exampleSubscribe(userId);

  // Step 2: Pull/Verify subscription
  console.log('\nStep 2: Verifying subscription...');
  const subscriptions = await exampleGetSubscriptions(userId);

  // Step 3: Update subscription (if needed)
  if (subscriptions.length > 0) {
    console.log('\nStep 3: Updating subscription...');
    await exampleUpdateSubscription(userId);
  }

  // Step 4: Pull again to verify update
  console.log('\nStep 4: Verifying update...');
  await exampleGetSubscriptions(userId);

  // Step 5: Unsubscribe (optional)
  console.log('\nStep 5: Unsubscribing...');
  await exampleUnsubscribe(userId);

  // Step 6: Verify unsubscribe
  console.log('\nStep 6: Verifying unsubscribe...');
  await exampleGetSubscriptions(userId);

  console.log('\n=== Workflow Complete ===');
}

/**
 * Example 6: Error handling
 * Shows how to handle errors gracefully
 */
export async function exampleErrorHandling(userId: string) {
  try {
    // Attempt to subscribe
    const result = await subscribeToPush(userId, {
      endpoint: 'invalid-endpoint',
      keys: { p256dh: '', auth: '' }
    });

    if (result.error) {
      console.error('Subscription failed:', result.error);
    } else {
      console.log('Subscription successful');
    }
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

// Export all examples
export const pushNotificationExamples = {
  subscribe: exampleSubscribe,
  getSubscriptions: exampleGetSubscriptions,
  updateSubscription: exampleUpdateSubscription,
  unsubscribe: exampleUnsubscribe,
  completeWorkflow: exampleCompleteWorkflow,
  errorHandling: exampleErrorHandling
};

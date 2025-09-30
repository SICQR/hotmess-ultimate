#!/bin/bash
# Test script for Push Notification API endpoints

BASE_URL="http://localhost:3000"

echo "=== Push Notification API Test Suite ==="
echo ""

# Test 1: POST - Subscribe/Push
echo "Test 1: POST /api/push-subscribe (PUSH)"
echo "Creating new subscription..."
curl -X POST "$BASE_URL/api/push-subscribe" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "test-user-123",
    "subscription": {
      "endpoint": "https://fcm.googleapis.com/fcm/send/test-endpoint",
      "keys": {
        "p256dh": "test-p256dh-key",
        "auth": "test-auth-key"
      }
    }
  }'
echo -e "\n"

# Test 2: GET - Pull subscriptions
echo "Test 2: GET /api/push-subscribe?userId=test-user-123 (PULL)"
echo "Retrieving subscriptions..."
curl -X GET "$BASE_URL/api/push-subscribe?userId=test-user-123"
echo -e "\n"

# Test 3: PUT - Merge/Update subscription
echo "Test 3: PUT /api/push-subscribe (MERGE)"
echo "Updating subscription..."
curl -X PUT "$BASE_URL/api/push-subscribe" \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "test-user-123",
    "subscription": {
      "endpoint": "https://fcm.googleapis.com/fcm/send/updated-endpoint",
      "keys": {
        "p256dh": "updated-p256dh-key",
        "auth": "updated-auth-key"
      }
    }
  }'
echo -e "\n"

# Test 4: GET - Verify update
echo "Test 4: GET /api/push-subscribe?userId=test-user-123 (Verify MERGE)"
echo "Retrieving updated subscription..."
curl -X GET "$BASE_URL/api/push-subscribe?userId=test-user-123"
echo -e "\n"

# Test 5: DELETE - Unsubscribe
echo "Test 5: DELETE /api/push-subscribe?userId=test-user-123 (DELETE)"
echo "Removing subscription..."
curl -X DELETE "$BASE_URL/api/push-subscribe?userId=test-user-123"
echo -e "\n"

# Test 6: GET - Verify deletion
echo "Test 6: GET /api/push-subscribe?userId=test-user-123 (Verify DELETE)"
echo "Verifying deletion..."
curl -X GET "$BASE_URL/api/push-subscribe?userId=test-user-123"
echo -e "\n"

echo "=== Test Suite Complete ==="

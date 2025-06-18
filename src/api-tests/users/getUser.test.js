import { test, expect } from '@playwright/test';

test.describe('GET /Account/v1/User/{UUID}', () => {
  let userId;
  let token;

  const userData = {
    userName: `testuser_${Date.now()}`,
    password: 'Great111Password@'
  };

  test.beforeEach(async ({ request }) => {
    const userRes = await request.post('/Account/v1/User', { data: userData });
    userId = (await userRes.json()).userID;

    const tokenRes = await request.post('/Account/v1/GenerateToken', { data: userData });
    token = (await tokenRes.json()).token;
  });

  test('should return user info for valid UUID', async ({ request }) => {
    const res = await request.get(`/Account/v1/User/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.username).toBe(userData.userName);
  });

  test('should fail to get user with invalid UUID', async ({ request }) => {
    const res = await request.get('/Account/v1/User/invalid-uuid', {
      headers: { Authorization: `Bearer ${token}` }
    });
    expect(res.status()).toBe(401);
  });
});

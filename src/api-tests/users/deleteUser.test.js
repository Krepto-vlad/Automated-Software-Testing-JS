import { test, expect } from '@playwright/test';

test.describe('DELETE /Account/v1/User/{UUID}', () => {
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

  test('should delete user with valid UUID', async ({ request }) => {
    const res = await request.delete(`/Account/v1/User/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    expect(res.status()).toBe(204);
  });

  test('should respond OK even if user does not exist', async ({ request }) => {
  const fakeUserId = '00000000-0000-0000-0000-000000000000';

  const res = await request.delete(`/Account/v1/User/${fakeUserId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  expect([200, 204]).toContain(res.status()); 
  });

});

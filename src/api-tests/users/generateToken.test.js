import { test, expect } from '@playwright/test';

const userData = {
  userName: `testuser_${Date.now()}`,
  password: 'Great111Password@'
};

test.describe('POST /Account/v1/GenerateToken', () => {
  test.beforeEach(async ({ request }) => {
    await request.post('/Account/v1/User', { data: userData });
  });

  test('should generate token for existing user', async ({ request }) => {
    const res = await request.post('/Account/v1/GenerateToken', { data: userData });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.token).toBeDefined();
    expect(body.status).toBe('Success');
  });

  test('should fail to generate token with wrong password', async ({ request }) => {
    const res = await request.post('/Account/v1/GenerateToken', {
      data: { ...userData, password: 'WrongPassword123!' }
    });
    expect(res.status()).toBe(200); 
    const body = await res.json();
    expect(body.status).toBe('Failed');
    expect(body.result).toBe('User authorization failed.');
  });
});

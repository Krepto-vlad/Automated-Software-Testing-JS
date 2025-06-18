import { test, expect, request } from '@playwright/test';

test.describe('POST /Account/v1/User', () => {
  const baseURL = 'https://demoqa.com';

  test(' Should create a user with valid data', async () => {
    const context = await request.newContext({
      baseURL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });

    const username = `testuser_${Date.now()}`;
    const password = 'Great111Password@';

    const response = await context.post('/Account/v1/User', {
      data: {
        userName: username,
        password: password,
      },
    });

    expect(response.ok()).toBeTruthy();
    const body = await response.json();

    expect(body.username).toBe(username);
    expect(body.userID).toBeDefined();
  });

  test(' Should fail to create a user with empty password', async () => {
    const context = await request.newContext({
      baseURL,
      extraHTTPHeaders: {
        'Content-Type': 'application/json',
      },
    });

    const response = await context.post('/Account/v1/User', {
      data: {
        userName: `user_${Date.now()}`,
        password: '',
      },
    });

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.message).toContain('UserName and Password required');
  });
});

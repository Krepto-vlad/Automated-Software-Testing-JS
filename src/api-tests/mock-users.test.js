import { test, expect } from '@playwright/test';

test.describe('User API Mock Tests', () => {
  const baseURL = 'https://api.example.com/users/';

  const successfulResponse = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    username: 'johndoe',
    phone: '+1-555-123-4567',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipcode: '10001',
      country: 'USA'
    },
    company: {
      name: 'Doe Enterprises',
      industry: 'Technology',
      position: 'Software Engineer'
    },
    dob: '1990-05-15',
    profile_picture_url: 'https://example.com/images/johndoe.jpg',
    is_active: true,
    created_at: '2023-01-01T12:00:00Z',
    updated_at: '2023-10-01T12:00:00Z',
    preferences: {
      language: 'en',
      timezone: 'America/New_York',
      notifications_enabled: true
    }
  };

  const errorResponse = (message, details) => ({
    error: message,
    details: details
  });

  test.beforeEach(async ({ page }) => {
    await page.route(`${baseURL}1`, route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(successfulResponse)
      });
    });

    await page.route(`${baseURL}204`, route => {
      route.fulfill({ status: 204 });
    });

    await page.route(`${baseURL}403`, route => {
      route.fulfill({
        status: 403,
        contentType: 'application/json',
        body: JSON.stringify(errorResponse('Access Denied', 'User not authorized'))
      });
    });

    await page.route(`${baseURL}404`, route => {
      route.fulfill({
        status: 404,
        contentType: 'application/json',
        body: JSON.stringify(errorResponse('User Not Found', 'No user exists with ID 404'))
      });
    });

    await page.route(`${baseURL}502`, route => {
      route.fulfill({
        status: 502,
        contentType: 'application/json',
        body: JSON.stringify(errorResponse('Bad Gateway', 'Upstream server error'))
      });
    });
  });

  async function fetchFromMock(page, path) {
    return await page.evaluate(async (url) => {
      const res = await fetch(url);
      const status = res.status;
      const json = status !== 204 ? await res.json() : null;
      return { status, json };
    }, baseURL + path);
  }

  test('should validate structure of successful response', async ({ page }) => {
    const { status, json } = await fetchFromMock(page, '1');
    expect(status).toBe(200);
    expect(json).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      email: expect.stringContaining('@'),
      username: expect.any(String),
      phone: expect.any(String),
      address: {
        street: expect.any(String),
        city: expect.any(String),
        state: expect.any(String),
        zipcode: expect.any(String),
        country: expect.any(String)
      },
      company: {
        name: expect.any(String),
        industry: expect.any(String),
        position: expect.any(String)
      },
      dob: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
      profile_picture_url: expect.stringContaining('http'),
      is_active: expect.any(Boolean),
      created_at: expect.stringMatching(/Z$/),
      updated_at: expect.stringMatching(/Z$/),
      preferences: {
        language: expect.any(String),
        timezone: expect.any(String),
        notifications_enabled: expect.any(Boolean)
      }
    });
  });

  test('should return 204 No Content', async ({ page }) => {
    const { status, json } = await fetchFromMock(page, '204');
    expect(status).toBe(204);
    expect(json).toBeNull();
  });

  test('should handle 403 error', async ({ page }) => {
    const { status, json } = await fetchFromMock(page, '403');
    expect(status).toBe(403);
    expect(json).toMatchObject({
      error: 'Access Denied',
      details: 'User not authorized'
    });
  });

  test('should handle 404 error', async ({ page }) => {
    const { status, json } = await fetchFromMock(page, '404');
    expect(status).toBe(404);
    expect(json).toMatchObject({
      error: 'User Not Found',
      details: 'No user exists with ID 404'
    });
  });

  test('should handle 502 error', async ({ page }) => {
    const { status, json } = await fetchFromMock(page, '502');
    expect(status).toBe(502);
    expect(json).toMatchObject({
      error: 'Bad Gateway',
      details: 'Upstream server error'
    });
  });
});

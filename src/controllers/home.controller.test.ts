import { describe, it } from '@jest/globals';
import request from 'supertest';
import App from '../app';

const app = new App().app;

describe('route GET: /', () => {
  it('should send 200 response', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});

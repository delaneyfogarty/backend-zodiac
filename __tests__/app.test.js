const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { zodiacs } = require('../data/zodiac');

describe('backend-express-template routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/zodiacs should return a list of zodiacs', async () => {
    const res = await request(app).get('/zodiacs');
    expect(res.body).toEqual(zodiacs);
  });
  it('/zodiacs/:id should return zodiac details', async () => {
    const res = await request(app).get('/zodiacs/10');
    expect(res.body).toEqual({
      id: '10',
      name: 'scorpio',
    });
  });
  afterAll(() => {
    pool.end();
  });
});

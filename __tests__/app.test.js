import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('REST room app', () => {
    beforeEach(() => {
        return setup(pool);
    });

    it('gets all addresses from the api', () => {
        return request(app)
            .get('api/v1/restrooms/')
            .then((res) => {
                expect(res.body).toEqual([{
                    address: expect.any(String),
                    place: expect.any(String),
                    state: expect.any(String),
                    city: expect.any(String),
                }]);
            });
    });


    afterAll(() => {
        pool.end();
    });
});

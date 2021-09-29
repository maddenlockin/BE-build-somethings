import pool from '../lib/utils/pool';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';

describe('REST room app', () => {
    beforeEach(() => {
        return setup(pool);
    });

    it('posts a new address to the database', async () => {
        const addressWhere = {
            street: '7000 NE Airport Way',
            name: 'Portland International Airport',
            state: 'OR',
            city: 'Portland',
        };
        const res = await request(app)
            .post('/api/v1/restrooms')
            .send(addressWhere);
        expect(res.body).toEqual({
            id: '1',
            ...addressWhere,
        });
    });

    it('gets all the whereData from the database', async () => {
        //console.log('in test...');
        const addressWhere = {
            street: '7000 NE Airport Way',
            name: 'Portland International Airport',
            state: 'OR',
            city: 'Portland',
        };
        await request(app)
            .post('/api/v1/restrooms')
            .send(addressWhere);
        return request(app)
            .get('/api/v1/restrooms')
            .then((res) => {
                //console.log(res);
                expect(res.body).toEqual([
                    {   
                        id: '1',
                        street: expect.any(String),
                        name: expect.any(String),
                        state: expect.any(String),
                        city: expect.any(String),
                    },
                ]);
            });
    });


    afterAll(() => {
        pool.end();
    });
});

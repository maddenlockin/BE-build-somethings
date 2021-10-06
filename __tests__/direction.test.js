const pool = require ('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');

describe('RESTroom app directions', () => {
    beforeEach(() => {
        return setup(pool);
    });
    
    const newDirection = {
        direction: 'turn right at the exit sign',
        addressName: 'PDX airport'
    };

    it('POSTS a new item', async () => {
        
        return request(app)
            .post('/api/v1/restrooms/directions')
            .send(newDirection)
            .then((res) => {
                expect(res.body).toEqual({
                    id: '1',
                    ...newDirection,
                });
            });
    });

    afterAll(() => {
        pool.end();
    });
});


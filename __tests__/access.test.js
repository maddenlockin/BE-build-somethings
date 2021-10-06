const pool = require ('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');
//const Accessible = require('../lib/models/Accessible.js');

describe('RESTroom app accessibility', () => {
    beforeEach(() => {
        return setup(pool);
    });
    
    const access = {
        accessible: true
    };

    it('POSTS a new item', () => {
        
        return request(app)
            .post('/api/v1/restrooms/access')
            .send(access)
            .then((res) => {
                expect(res.body).toEqual({
                    id: '1',
                    ...access,
                });
            });
    });
});

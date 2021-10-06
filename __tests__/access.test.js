const pool = require ('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');
const Accessible = require('../lib/models/Accessible.js');
//const Accessible = require('../lib/models/Accessible.js');

describe('RESTroom app accessibility', () => {
    beforeEach(() => {
        return setup(pool);
    });
    
    const newAccess = {
        accessible: true
    };

    it('POSTS a new item', async () => {
        
        return request(app)
            .post('/api/v1/restrooms/access')
            .send(newAccess)
            .then((res) => {
                expect(res.body).toEqual({
                    id: '1',
                    ...newAccess,
                });
            });
    });

    xit('gets all the access data from the database', async () => {
        //const entry = await Accessible.create(access);
        //console.log('entry', entry);
        await request(app)
            .post('/api/v1/restrooms/access')
            .send(newAccess);
        return request(app)
            .get('/api/v1/restrooms/access')
            .then((res) => {
                console.log(res.body);
                expect(res.body).toEqual([{
                    id: '1',
                    accessible: true
                }]);
            });
    });

    it('gets an item by id', async () => {
        const entry = await Accessible.create(newAccess);

        return request(app)
            .get('/api/v1/restrooms/access/1')
            .then((res) => {
                expect(res.body).toEqual(entry);
            });
    });

    it('updates an item by its id', async () => {
        const entry = await Accessible.create(newAccess);
        const updateEntry = {
            id: entry.id,
            accessible: false,
        };
        return request(app)
            .patch(`/api/v1/restrooms/access/${entry.id}`)
            .send(updateEntry)
            .then((res) => {
                expect(res.body).toEqual(updateEntry);
            });
    });

    it('deletes an item by id', async () => {
        const entry = await Accessible.create(newAccess);

        return request(app)
            .delete(`/api/v1/restrooms/access/${entry.id}`)
            .then((res) => {expect(res.body).toEqual({});
            });
    });

    afterAll(() => {
        pool.end();
    });
});

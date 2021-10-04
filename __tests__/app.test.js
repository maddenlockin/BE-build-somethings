const pool = require ('../lib/utils/pool.js');
const setup = require ('../data/setup.js');
const request = require ('supertest');
const app = require ('../lib/app.js');
const Address = require('../lib/models/Address.js');

describe('REST room app', () => {
    beforeEach(() => {
        return setup(pool);
    });
    const addressWhere = {
        street: '7000 NE Airport Way',
        name: 'Portland International Airport',
        state: 'OR',
        city: 'Portland',
    };

    it('posts a new address to the database', () => {
        return request(app)
            .post('/api/v1/restrooms')
            .send(addressWhere)
            .then((res) => { expect(res.body).toEqual({
                id: '1',
                ...addressWhere,
            });
            });
    });

    it('gets all the Address data from the database', async () => {
        const entry = await Address.insert(addressWhere);

        return request(app)
            .get('/api/v1/restrooms')
            .then((res) => {
                //console.log(res);
                expect(res.body).toEqual([entry]);
            });
    });

    it('gets an item by id', async () => {
        const entry = await Address.insert(addressWhere);

        return request(app)
            .get('/api/v1/restrooms/1')
            .then((res) => {
                expect(res.body).toEqual(entry);
            });
    });

    it('updates an item by its id', async () => {
        const entry = await Address.insert(addressWhere);
        const updateEntry = {
            id: entry.id,
            street: entry.street,
            name: 'PDX airport',
            state: entry.state,
            city: entry.city
        };
        return request(app)
            .patch(`/api/v1/restrooms/${entry.id}`)
            .send(updateEntry)
            .then((res) => {
                expect(res.body).toEqual(updateEntry);
            });
    });

    it('deletes an item by id', async () => {
        const item = await Address.insert(addressWhere);

        return request(app)
            .delete(`/api/v1/restrooms/${item.id}`)
            .then((res) => {expect(res.body).toEqual({});
            });
    });


    afterAll(() => {
        pool.end();
    });
});

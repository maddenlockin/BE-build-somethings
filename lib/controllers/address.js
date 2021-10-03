const { Router } = require ('express');
const Address = require ('../models/Address');


module.exports = Router()
    .post('/', async (req, res, next) => {
        try {
            const entry = await Address.insert(req.body);
            res.send(entry);
        } catch (err) {
            next(err);
        }
    })

    .get('/', async (req, res, next) => {
        try {
            const savedWhere = await Address.getAll();
            res.json(savedWhere);
        } catch (err) {
            next(err);
        }
    })

    .get('/:id', async (req, res, next) => {
        try {
            const id = req.params.id;
            const item = await Address.getById(id);
            res.send(item);
        } catch (err) {
            next(err);
        }
    })

    .patch('/:id', async (req, res, next) => {
        try {
            const id = req.params.id;
            const update = await Address.updateEntry(id, req.body.street, req.body.name, req.body.state, req.body.city);
            res.send(update);
        } catch (err) {
            next(err);
        }
    })

;

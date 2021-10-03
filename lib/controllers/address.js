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

;

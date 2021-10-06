const { Router } = require ('express');
const Direction = require ('../models/Direction');


module.exports = Router()
    .post('/', async (req, res, next) => {
        try {
            const entry = await Direction.create(req.body);
            res.send(entry);
        } catch (err) {
            next(err);
        }
    })
;

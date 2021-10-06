const { Router } = require('express');
const Accessible = require('../models/Accessible.js');

module.exports = Router()
    .post('/', async (req, res, next) => {
        try {
            const entry = await Accessible.create(req.body);
            res.send(entry);
        } catch (err) {
            next(err);
        }
    }

    );

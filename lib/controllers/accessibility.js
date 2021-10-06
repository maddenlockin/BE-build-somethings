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
    })
    
    .get('/', async (req, res, next) => {
        //console.log('controller');
        try {
            const savedAccess = await Accessible.getAll();
            res.send(savedAccess);
        } catch (err) {
            next(err);
        }
    })

    .get('/:id', async (req, res, next) => {
        try {
            const id = req.params.id;
            const item = await Accessible.getById(id);
            res.send(item);
        } catch (err) {
            next(err);
        }
    })

    .patch('/:id', async (req, res, next) => {
        try {
            const id = req.params.id;
            const update = await Accessible.updateEntry(id, req.body.accessible);
            res.send(update);
        } catch (err) {
            next(err);
        }
    })

    .delete('/:id', async (req, res, next) => {
        try {
            const id = req.params.id;
            const deleted = await Accessible.deleteEntry(id);
            res.send(deleted);
        } catch (err) {
            next(err);
        }
    })
;

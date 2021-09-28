import { Router } from 'express';
import Address from '../models/Address';

export default Router()
    .get('/', async (req, res, next) => {
        try {
            const savedAddress = await Address.getAll();
            res.json(savedAddress);
        } catch (err) {
            next(err);
        }
    })

    .post('/', async (req, res, next) => {
        try {
            const entry = await Address.insert(req.body);
            res.send(entry);
        } catch (err) {
            next(err);
        }
    });

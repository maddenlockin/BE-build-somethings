import { Router } from 'express';
import Address from '../models/Address';


export default Router()
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

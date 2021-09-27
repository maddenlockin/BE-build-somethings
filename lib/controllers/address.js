import { Router } from 'express';
import Address from '../models/Address';

export default Router()
    .get('/', async (req, res, next) => {
        try {
            const savedAddress = await Address.saveAddress();
            res.json(savedAddress);
        } catch (err) {
            next(err);
        }
    });

import express from 'express';

import methods from '../controllers/country.controller';

const router = express.Router();

/**
 * get All country by user id
 */
router.get('/search', methods.search);

export default router;

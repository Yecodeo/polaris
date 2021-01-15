import express from 'express';
import methods from '../controllers/affiliation.constroller';

const router = express.Router();

/**
 * search in affiliation
 */
router.get('/search', methods.get);

/**
 * get All affiliation by user id
 */
router.get('/:id', methods.get);

/**
 * Add new affiliation
 */
router.post('/', methods.post);

/**
 * update a affiliation
 */
router.put('/:id', methods.put);

export default router;

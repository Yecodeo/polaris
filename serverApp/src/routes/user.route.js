import express from 'express';
import update from '../helper/updateFile';
import methods from '../controllers/user.controller';

const router = express.Router();

/**
 * get All User by user id
 */
router.get('/search', methods.search);

/**
 * get User by id
 */
router.get('/:id', methods.get);

/**
 * Add new User
 */
router.post('/', methods.post);

/**
 * update a User
 */
router.put('/:id', update.single('avatar'), methods.put);

export default router;

import express from 'express';

import {
  findAll,
} from '../repository/organisation.repository';
import hitsTransformer from '../helper/hitsTransformer';

const router = express.Router();

/**
 * get All User by user id
 */
router.get('/', (req, res) => {
  findAll(req.query.q).then((response) => {
    res.status(200).json({
      state: 'ok',
      data: hitsTransformer(response),
    });
  }).catch((error) => {
    res.status(500).json({
      state: 'error',
      error,
    });
  });
});

export default router;

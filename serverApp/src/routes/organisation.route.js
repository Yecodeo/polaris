import express from 'express';

import {
  findAll,
  hitsToResponse,
} from '../db/repository/organisation.repository';

const router = express.Router();

/**
 * get All User by user id
 */
router.get('/user', (req, res) => {
  findAll(req.query.q).then((response) => {
    res.status(200).json({
      state: 'ok',
      data: hitsToResponse(response),
    });
  }).catch((error) => {
    res.status(500).json({
      state: 'error',
      error,
    });
  });
});

export default router;

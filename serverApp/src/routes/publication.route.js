import express from 'express';

import {
  findInPublication,
  hitsToResponse,
} from '../db/repository/publication.repository';

const router = express.Router();

/**
 * get All publication by user id
 */
router.get('/publication/search', (req, res) => {
  findInPublication(req.query.q).then((response) => {
    console.log(response.body.hits);
    res.status(200).json({
      state: 'ok',
      data: hitsToResponse(response),
    });
  }).catch((error) => res.status(500).json({
    state: 'error',
    error,
  }));
});

export default router;

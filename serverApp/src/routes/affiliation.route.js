import express from 'express';

import {
  findByUser,
  findInAffiliation,
  addAffiliation,
  updateAffiliation,
  deleteAffiliation,
  hitsToResponse,
} from '../db/repository/affiliation.repository';

const router = express.Router();

/**
 * search in affiliation
 */
router.get('/affiliation/search', (req, res) => {
  findInAffiliation(req.query.q).then((response) => {
    res.status(200).json({
      state: 'ok',
      data: hitsToResponse(response),
    });
  }).catch((error) => res.status(500).json({
    state: 'error',
    error,
  }));
});

/**
 * get All affiliation by user id
 */
router.get('/affiliation/:id', (req, res) => {
  findByUser(req.params.id).then((response) => {
    res.status(200).json({
      state: 'ok',
      data: hitsToResponse(response),
    });
  }).catch((error) => res.status(500).json({
    state: 'error',
    error,
  }));
});

/**
 * Add new affiliation
 */
router.post('/affiliation', (req, res) => {
  addAffiliation(req.body).then((response) => {
    console.log(response);
    return res.status(200).json({
      state: 'ok',
      data: {
        id: response.body._id,
        result: response.body.result,
      },
    });
  }).catch((error) => res.status(500).json({
    state: 'error',
    error,
  }));
});

/**
 * update a affiliation
 */
router.put('/affiliation/:id', (req, res) => {
  updateAffiliation(req.params.id, req.body).then((response) => {
    console.log(response);
    res.status(200).json({
      state: 'ok',
      data: {
        id: response.body._id,
        result: response.body.result,
      },
    });
  }).catch((error) => {
    res.status(500).json({
      state: 'error',
      error,
    });
  });
});

/**
 * delete a affiliation
 */
router.delete('/affiliation/:id', (req, res) => {
  deleteAffiliation(req.params.id).then((response) => {
    res.status(200).json({
      state: 'ok',
      data: {
        id: response.body._id,
        result: response.body.result,
      },
    });
  }).catch((error) => res.status(500).json({
    state: 'error',
    error,
  }));
});

export default router;

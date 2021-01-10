import express from 'express';

import {
  findByUser,
  findInPublication,
  addPublication,
  updatePublication,
  deletePublication,
  hitsToResponse,
} from '../db/repository/publication.repository';

const router = express.Router();

/**
 * get All publication by user id
 */
router.get('/publication/search', (req, res) => {
  findInPublication(req.query.q).then((response) => {
    console.log(response);
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
 * get All publication by user id
 */
router.get('/publication/:id', (req, res) => {
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
 * Add new publication
 */
router.post('/publication', (req, res) => {
  addPublication(req.body).then((response) => {
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
 * update a publication
 */
router.put('/publication/:id', (req, res) => {
  updatePublication(req.params.id, req.body).then((response) => {
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

/**
 * delete a publication
 */
router.delete('/publication/:id', (req, res) => {
  deletePublication(req.params.id).then((response) => {
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

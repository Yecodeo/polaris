import express from 'express';

import {
  addCountry,
  updateCountry,
  deleteCountry,
  hitsToResponse,
  searchCountry,
} from '../db/repository/country.repository';

const router = express.Router();

/**
 * get All country by user id
 */
router.get('/country/search', (req, res) => {
  searchCountry(req.query.q).then((response) => {
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

/**
 * Add new country
 */
router.post('/country', (req, res) => {
  addCountry(req.body).then((response) => {
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
 * update a country
 */
router.put('/country/:id', (req, res) => {
  updateCountry(req.params.id, req.body).then((response) => {
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
 * delete a country
 */
router.delete('/country/:id', (req, res) => {
  deleteCountry(req.params.id).then((response) => {
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

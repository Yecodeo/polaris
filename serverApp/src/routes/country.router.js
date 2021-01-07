import express from 'express';

import {
  findByCountry,
  addCountry,
  updateCountry,
  deleteCountry,
  hitsToResponse,
  searchCountry
} from '../db/repository/country.repository';

const router = express.Router();

/**
 * get All country by user id
 */
router.get('/country/search', function (req, res, next) {
  searchCountry(req.query.q).then(response => {
    res.status(200).json({
      state: 'ok',
      data: response,
    });
  }).catch(error => {
    return res.status(500).json({
      state: 'error',
      error
    })
  });
});

/**
 * get All country by user id
 */
router.get('/country/:id', function (req, res, next) {
  findByCountry(req.params.id).then(response => {
    res.status(200).json({
      state: 'ok',
      data: hitsToResponse(response.body.hits.hits),
    });
  }).catch(error => {
    return res.status(500).json({
      state: 'error',
      error
    })
  });
});

/**
 * Add new country
 */
router.post('/country', function (req, res) {
  addCountry(req.body).then(response => {
    console.log(response)
    return res.status(200).json({
      state: 'ok',
      data: {
        id: response.body._id,
        result: response.body.result
      }
    });
  }).catch(error => {
    return res.status(500).json({
      state: 'error',
      error
    })
  });
});

/**
 * update a country
 */
router.put('/country/:id', function (req, res) {
  updateCountry(req.params.id, req.body).then(response => {
    res.status(200).json({
      state: 'ok',
      data: {
        id: response.body._id,
        result: response.body.result
      }
    });
  }).catch(error => {
    return res.status(500).json({
      state: 'error',
      error: error
    })
  });
});

/**
 * delete a country
 */
router.delete('/country/:id', function (req, res) {
  deleteCountry(req.params.id).then(response => {
    res.status(200).json({
      state: 'ok',
      data: {
        id: response.body._id,
        result: response.body.result
      }
    });
  }).catch(error => {
    return res.status(500).json({
      state: 'error',
      error
    })
  });
});

export default router;
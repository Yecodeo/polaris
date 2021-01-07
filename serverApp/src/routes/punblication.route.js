import express from 'express';
import elastic from '../db/elastic';

import {
  findByUser,
  findByPublication,
  addPublication,
  updatePublication,
  deletePublication,
  hitsToResponse
} from '../db/repository/publication.repository';
import {esLog} from '../middleware/elasticsearch.log';

const client = elastic.getInstance();
const router = express.Router();

/**
 * Log every request 
 */
router.use((req, res, next) => {
  esLog(client, req);
  next();
})


/**
 * get All publication by user id
 */
router.get('/publication/search', function (req, res, next) {
  findByPublication(req.query.q).then(response => {
    res.status(200).json({
      state: 'ok',
      data: hitsToResponse(response.hits.hits),
    });
  }).catch(error => {
    return res.status(500).json({
      state: 'error',
      error
    })
  });
});

/**
 * get All publication by user id
 */
router.get('/publication/:id', function (req, res, next) {
  findByUser(req.params.id).then(response => {
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
 * Add new publication
 */
router.post('/publication', function (req, res) {
  addPublication(req.body).then(response => {
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
 * update a publication
 */
router.put('/publication/:id', function (req, res) {
  updatePublication(req.params.id, req.body).then(response => {
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
 * delete a publication
 */
router.delete('/publication/:id', function (req, res) {
  deletePublication(req.params.id).then(response => {
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
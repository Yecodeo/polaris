import express from 'express';
import esClient from '../db/esClient';
import {
  findByUser,
  findByPublication,
  addPublication,
  updatePublication,
  deletePublication
} from '../db/publication.manager';

const client = esClient.getInstance();
const router = express.Router();

router.use((req, res, next) => {
  client.index({
    index: 'logs',
    body: {
      url: req.url,
      method: req.method
    }
  }).then(res => {
    console.log('Logs indexed')
  }).catch(err => {
    console.error(err);
  })
  next();
})


/**
 * get All publication by user id
 */
router.get('/publication/search', function (req, res, next) {
  findByPublication(req.query.q).then(response => {
    res.status(200).json({
      state: 'ok',
      count: response.hits.total,
      data: response.hits.hits,
    });
  }).catch(error => {
    return res.statusCode(500).json({
      state: 'ok',
      error
    })
  });
});

/**
 * get All publication by user id
 */
router.get('/publication/user/:id', function (req, res, next) {
  findByUser(req.params.id).then(response => {
    res.status(200).json({
      state: 'ok',
      data: response,
    });
  }).catch(error => {
    return res.statusCode(500).json({
      state: 'ok',
      error
    })
  });
});

/**
 * Add new publication
 */
router.post('/publication', function (req, res) {
  addPublication(req.body).then(response => {
    return res.status(200).json({
      state: 'ok',
      data: response,
    });
  }).catch(error => {
    return res.statusCode(500).json({
      state: 'ok',
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
      data: response,
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
  deletePublication.then(response => {
    res.status(200).json({
      state: 'ok',
      data: response,
    });
  }).catch(error => {
    return res.statusCode(500).json({
      state: 'ok',
      error
    })
  });
});

export default router;
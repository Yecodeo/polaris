import express from 'express';
import elastic from '../db/elastic';

import {
  findUser,
  findByUser,
  addUser,
  updateUser,
  deleteUser,
  hitsToResponse
} from '../db/user.repository';
import { esLog } from '../middleware/elasticsearch.log';

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
 * get All User by user id
 */
router.get('/user/search', function (req, res, next) {
  findByUser(req.query.q).then(response => {
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
 * get All User by user id
 */
router.get('/user/:id', function (req, res, next) {
  findUser(req.params.id).then(response => {
	res.status(200).json({
      state: 'ok',
      data: hitsToResponse(response.body.hits.hits)
    });
  }).catch(error => {
    return res.status(500).json({
      state: 'error',
      error
    })
  });
});

/**
 * Add new User
 */
router.post('/user', function (req, res) {
  addUser(req.body).then(response => {
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
 * update a User
 */
router.put('/user/:id', function (req, res) {
  updateUser(req.params.id, req.body).then(response => {
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
 * delete a User
 */
router.delete('/user/:id', function (req, res) {
  deleteUser(req.params.id).then(response => {
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
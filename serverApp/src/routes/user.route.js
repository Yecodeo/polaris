import express from 'express';
import update from '../helper/updateFile';

import {
  findUser,
  addUser,
  updateUser,
  deleteUser,
  hitsToResponse,
  findUserById,
} from '../db/repository/user.repository';

const router = express.Router();

/**
 * get All User by user id
 */
router.get('/user/search', (req, res) => {
  findUser(req.query.q).then((response) => {
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
 * get All User by user id
 */
router.get('/user/:id', (req, res) => {
  findUserById(req.params.id).then((response) => {
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
 * Add new User
 */
router.post('/user', (req, res) => {
  addUser(req.body).then((response) => res.status(200).json({
    state: 'ok',
    data: {
      id: response.body._id,
      result: response.body.result,
    },
  })).catch((error) => res.status(500).json({
    state: 'error',
    error,
  }));
});

/**
 * update a User
 */
router.post('/user/:id', update.single('avatar'), (req, res) => {
  if (req.body.filehash) {
    req.body = { profil: { avatar: req.body.filehash } };
  }

  updateUser(req.params.id, req.body).then((response) => {
    res.status(200).json({
      state: 'ok',
      data: {
        id: response.body._id,
        result: response.body.result,
      },
    });
  }).catch((error) => {
    console.error(error);
    res.status(500).json({
      state: 'error',
      error,
    });
  });
});

/**
 * delete a User
 */
router.delete('/user/:id', (req, res) => {
  deleteUser(req.params.id).then((response) => {
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

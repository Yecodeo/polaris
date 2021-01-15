import {
  findUser,
  findUserById,
  addUser,
  updateUser,
} from '../repository/user.repository';

import ch from '../helper/controller.handler';

export default {
  get: (req, res) => {
    findUserById(req.params.id).then((response) => {
      res.status(200).json(
        ch.getHandler.succes(response),
      );
    }).catch((error) => res.status(500).json(
      ch.fail(error),
    ));
  },
  search: (req, res) => {
    findUser(req.query.q).then((response) => {
      res.status(200).json(
        ch.getHandler.succes(response),
      );
    }).catch((error) => res.status(500).json(
      ch.fail(error),
    ));
  },
  post: (req, res) => {
    addUser(req.body).then((response) => {
      res.status(200).json(response);
    }).catch((error) => res.status(500).json(
      ch.getHandler.fail(error),
    ));
  },
  put: (req, res) => {
    if (req.body.filehash) {
      req.body = {
        profil: {
          avatar: req.body.filehash,
        },
      };
    }

    updateUser(req.params.id, req.body).then((response) => {
      res.status(200).json(ch.putHandler.success(response));
    }).catch((error) => {
      res.status(500).json(
        ch.fail(error),
      );
    });
  },
};

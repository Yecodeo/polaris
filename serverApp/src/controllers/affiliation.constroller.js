import {
  findByUser,
  findInAffiliation,
  addAffiliation,
  updateAffiliation,
} from '../repository/affiliation.repository';

import ch from '../helper/controller.handler';

export default {
  get: (req, res) => {
    findByUser(req.params.id).then((response) => {
      res.status(200).json(ch.getHandler.succes(response));
    }).catch((error) => {
      res.status(500).json(ch.fail(error));
    });
  },
  search: (req, res) => {
    findInAffiliation(req.query.q).then((response) => {
      res.status(200).json(ch.getHandler.succes(response));
    }).catch((error) => {
      res.status(500).json(ch.fail(error));
    });
  },
  post: (req, res) => {
    addAffiliation(req.body).then((response) => {
      res.status(200).json(ch.postHandler.succes(response));
    }).catch((error) => {
      res.status(500).json(ch.fail(error));
    });
  },
  put: (req, res) => {
    updateAffiliation(req.params.id, req.body).then((response) => {
      res.status(200).json(ch.putHandler.succes(response));
    }).catch((error) => {
      res.status(500).json(ch.fail(error));
    });
  },
};

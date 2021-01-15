import {
  findInPublication,
} from '../repository/publication.repository';

import ch from '../helper/controller.handler';

export default {
  search: (req, res) => {
    findInPublication(req.query.q).then((response) => {
      res.status(200).json(ch.getHandler.succes(response));
    }).catch((error) => {
      res.status(500).json(ch.fail(error));
    });
  },
};

import elastic from '../db/elastic';

const client = elastic.getInstance();
const index = 'affiliation';
/**
 * find a user by name
 * @param {user} user
 */
export function findInAffiliation(keywork) {
  return client.search({
    index,
    body: {
      query: {
        query_string: {
          query: `*${keywork}*`,
          fields: ['organisation', 'equipe'],
        },
      },
    },
  });
}

/**
 * find a affiliation by user id
 * @param {user id} id
 */
export function findByUser(id) {
  return client.search({
    index,
    body: {
      sort: { _doc: { order: 'desc' } },
      query: {
        match: {
          _user: id,
        },
      },
    },
  });
}

/**
 * Add new affiliation
 * @param {Json} body
 */
export function addAffiliation(body) {
  return client.index({
    index,
    body,
  });
}

/**
 * update a affiliation
 * @param {Object} body
 */
export function updateAffiliation(id, body) {
  console.log(id, body);
  return client.update({
    index,
    id,
    body: {
      doc: body,
    },
  });
}

/**
 * delete a affiliation
 * @param {id} id
 */
export function deleteAffiliation(id) {
  return client.delete({
    index,
    id,
  });
}

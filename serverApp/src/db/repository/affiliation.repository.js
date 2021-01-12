import elastic from '../elastic';

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
export function findByAffiliation(id) {
  return client.search({
    index,
    body: {
      query: {
        match: {
          owner: id,
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

export function hitsToResponse(array) {
  const { body: { hits: { hits } } } = array;
  return hits.map((hit) => ({
    _user: hit._source?._user,
    organisation: hit?._source?.organisation,
    post: hit?._source?.post,
    date: hit?._source?.date,
    country: hit?._source?.country,
  }));
}

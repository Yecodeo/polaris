import elastic from '../elastic';

const client = elastic.getInstance();

/**
 * find a user by name
 * @param {user} user
 */
export function findInAffiliation(keywork) {
  return client.search({
    index: 'user',
    body: {
      query: {
        nested: {
          path: 'affiliation',
          query: {
            bool: {
              must: [{
                match: {
                  'affiliation.organisation': keywork,
                },
              }],
            },
          },
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
    index: 'affiliation',
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
    index: 'affiliation',
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
    index: 'affiliation',
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
    index: 'affiliation',
    id,
  });
}

export function hitsToResponse(array) {
  const { body: { hits: { hits } } } = array;

  return hits.map((hit) => ({
    id: hit?._id,
    title: hit?._source?.affiliation?.title,
    owner: hit?._source?.affiliation?.owner,
    auteurs: hit?._source?.affiliation?.auteurs,
    annee: hit?._source?.affiliation?.annee,
    lang: hit?._source?.affiliation?.lang,
  }));
}

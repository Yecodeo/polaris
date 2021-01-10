import elastic from '../elastic';

const client = elastic.getInstance();

/**
 * find a user by name
 * @param {user} user
 */
export function findInPublication(keywork) {
  return client.search({
    index: 'user',
    body: {
      query: {
        nested: {
          path: 'publication',
          query: {
            bool: {
              must: [{
                match: {
                  'publication.title': keywork,
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
 * find a publication by user id
 * @param {user id} id
 */
export function findByUser(id) {
  return client.search({
    index: 'publication',
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
 * Add new publication
 * @param {Json} body
 */
export function addPublication(body) {
  return client.index({
    index: 'publication',
    body,
  });
}

/**
 * update a publication
 * @param {Object} body
 */
export function updatePublication(id, body) {
  console.log(id, body);
  return client.update({
    index: 'publication',
    id,
    body: {
      doc: body,
    },
  });
}

/**
 * delete a publication
 * @param {id} id
 */
export function deletePublication(id) {
  return client.delete({
    index: 'publication',
    id,
  });
}

export function hitsToResponse(hits) {
  return hits.map((hit) => ({
    id: hit._id,
    title: hit._source.publication.title,
    owner: hit._source.publication.owner,
    auteurs: hit._source.publication.auteurs,
    annee: hit._source.publication.annee,
    lang: hit._source.publication.lang,
  }));
}

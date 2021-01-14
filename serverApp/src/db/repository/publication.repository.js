import elastic from '../elastic';

const client = elastic.getInstance();

/**
 * find a user by name
 * @param {user} user
 */
export function findInPublication(keywork) {
  return client.search({
    index: 'publication',
    body: {
      query: {
        query_string: {
          query: `*${keywork}*`,
          fields: ['titre'],
        },
      },
    },
  });
}

export function hitsToResponse(object) {
  const { body: { hits: { hits } } } = object;
  return hits.map((hit) => ({
    id: hit._id,
    titre: hit._source.titre,
    auteurs: hit._source.auteurs,
    annee: hit._source.annee,
    lang: hit._source.lang,
  }));
}

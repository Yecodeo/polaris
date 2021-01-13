import elastic from '../elastic';

const client = elastic.getInstance();
const index = 'organisation';

/**
 * find a user by name
 * @param {user} user
 */
export function findAll() {
  return client.search({
    index,
    body: {
      query: {
        march_all: {},
      },
    },
  });
}

export function hitsToResponse(array) {
  const { body: { hits: { hits } } } = array;
  return hits.map((hit) => ({
    id: hit._id,
    name: hit?._source?.name
  }));
}

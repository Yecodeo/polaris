import elastic from '../db/elastic';

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
        match_all: {},
      },
    },
  });
}

import elastic from '../db/elastic';

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

import elastic from '../db/elastic';

const client = elastic.getInstance();
const index = 'user';

/**
 * find a user by name
 * @param {user} user
 */
export function findUser(keywork) {
  return client.search({
    index,
    body: {
      query: {
        query_string: {
          query: `*${keywork}*`,
          fields: ['firstname', 'lastname'],
        },
      },
    },
  });
}

/**
 * find a User by user id
 * @param {user id} id
 */
export function findUserById(id) {
  return client.search({
    index,
    body: {
      query: {
        match: {
          _id: id,
        },
      },
    },
  });
}

/**
 * Add new User
 * @param {Json} body
 */
export function addUser(body) {
  return client.index({
    index,
    body,
  });
}

/**
 * update a User
 * @param {Object} body
 */
export function updateUser(id, body) {
  return client.update({
    index,
    id,
    body: {
      doc: body,
    },
  });
}

/**
 * delete a User
 * @param {id} id
 */
export function deleteUser(id) {
  return client.delete({
    index,
    id,
  });
}

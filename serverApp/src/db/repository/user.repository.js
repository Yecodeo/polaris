import elastic from '../elastic';

const client = elastic.getInstance();

/**
 * find a user by name
 * @param {user} user
 */
export function findByUser(keywork) {
  return client.search({
    index: 'user',
    body: {
      query: {
        query_string: {
          query: keywork,
        },
      },
    },
  });
}

/**
 * find a User by user id
 * @param {user id} id
 */
export function findUser(id) {
  return client.search({
    index: 'user',
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
    index: 'user',
    body,
  });
}

/**
 * update a User
 * @param {Object} body
 */
export function updateUser(id, body) {
  console.log(id, body);
  return client.update({
    index: 'user',
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
    index: 'user',
    id,
  });
}

export function hitsToResponse(hits) {
  return hits.map((hit) => ({
    id: hit._id,
    firstname: hit._source.firstname,
    lastname: hit._source.lastname,
    profil: {
      aboutme: hit._source.profil.aboutme,
      socials: hit._source.profil.socials,
      team: hit._source.profil.team,
      date: hit._source.profil.date,
      country: hit._source.profil.country,
      avatar: hit._source.profil.avatar,
    },
  }));
}

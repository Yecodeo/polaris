import elastic from '../elastic';

const client = elastic.getInstance();

/**
 * find a user by name
 * @param {user} user 
 */
function findByUser(keywork) {
	return client.search({
		index: 'user',
		body: {
			query: {
				query_string: {
					query: keywork
				}
			}
		}
	});
}

/**
 * find a User by user id
 * @param {user id} id 
 */
function findUser(id) {
	return client.search({
		index: 'user',
		body: {
			query: {
				match: {
					_id: id
				}
			}
		}
	})
}

/**
 * Add new User
 * @param {Json} body 
 */
function addUser(body) {
	return client.index({
		index: 'user',
		body: body
	})
}

/**
 * update a User
 * @param {Object} body 
 */
function updateUser(id, body) {
	console.log(id, body)
	return client.update({
		index: 'user',
		id: id,
		body: {
			doc: body
		}
	})
}

/**
 * delete a User
 * @param {id} id 
 */
function deleteUser(id) {
	return client.delete({
		index: 'user',
		id: id
	})
}

function hitsToResponse(hits) {
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
			avatar: hit._source.profil.avatar
		}
	}));
}

exports.hitsToResponse = hitsToResponse;
exports.deleteUser = deleteUser;
exports.updateUser = updateUser;
exports.addUser = addUser;
exports.findByUser = findByUser;
exports.findUser = findUser;
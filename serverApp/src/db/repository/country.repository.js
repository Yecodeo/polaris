import elastic from '../elastic';

const client = elastic.getInstance();

/**
 * find a country by name
 * @param {country} country 
 */
function searchCountry(keywork) {
	return client.search({
		index: 'country',
		body: {
			query: {
				match_phrase_prefix: {
					name: {
						query: keywork
					}
				}
		}}
	  })
}

/**
 * find a Country by country id
 * @param {country id} id 
 */
function findCountry(id) {
	return client.search({
		index: 'country',
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
 * Add new Country
 * @param {Json} body 
 */
function addCountry(body) {
	return client.index({
		index: 'country',
		body: body
	})
}

/**
 * update a Country
 * @param {Object} body 
 */
function updateCountry(id, body) {
	console.log(id, body)
	return client.update({
		index: 'country',
		id: id,
		body: {
			doc: body
		}
	})
}

/**
 * delete a Country
 * @param {id} id 
 */
function deleteCountry(id) {
	return client.delete({
		index: 'country',
		id: id
	})
}

function hitsToResponse(hits) {
	return hits.map((hit) => ({
		id: hit._id,
		name: hit._source.name,
		code: hit._source.code,
	}));
}

exports.hitsToResponse = hitsToResponse;
exports.deleteCountry = deleteCountry;
exports.updateCountry = updateCountry;
exports.addCountry = addCountry;
exports.searchCountry = searchCountry;
exports.findCountry = findCountry;
import elastic from '../elastic';

const client = elastic.getInstance();

/**
 * find a country by name
 * @param {country} country
 */
export function searchCountry(keywork) {
  return client.search({
    index: 'country',
    body: {
      query: {
        match_phrase_prefix: {
          name: {
            query: keywork,
          },
        },
      },
    },
  });
}

/**
 * find a Country by country id
 * @param {country id} id
 */
export function findCountry(id) {
  return client.search({
    index: 'country',
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
 * Add new Country
 * @param {Json} body
 */
export function addCountry(body) {
  return client.index({
    index: 'country',
    body,
  });
}

/**
 * update a Country
 * @param {Object} body
 */
export function updateCountry(id, body) {
  console.log(id, body);
  return client.update({
    index: 'country',
    id,
    body: {
      doc: body,
    },
  });
}

/**
 * delete a Country
 * @param {id} id
 */
export function deleteCountry(id) {
  return client.delete({
    index: 'country',
    id,
  });
}

/**
 * Normalize response json
 * @param {*} hits
 */
export function hitsToResponse(element) {
  const { body: { hits: { hits } } } = element;
  return hits.map((hit) => ({
    name: hit?._source?.name,
    code: hit?._source?.code,
  }));
}

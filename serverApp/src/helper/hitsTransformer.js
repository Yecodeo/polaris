/**
 * extract properties ans there value from elastic response
 * @param {*} array 
 */
export default function (array) {
  const { body: { hits: { hits } } } = array;
  return hits.map((hit) => {
    const object = hit._source;
    object.id = hit._id;
    return object;
  });
}

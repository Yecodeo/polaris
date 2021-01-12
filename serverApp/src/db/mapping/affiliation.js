import path from 'path';

const indexName = path.basename(__filename).split('.')[0];

/**
 * set mapping of created index
 * @param {} client
 */
export default function user(client) {
  console.info(`creating ${indexName} mapping...`);
  client.indices.putMapping({
    index: indexName,
    body: {
      properties: {
        organisation: { type: 'text' },
        post: { type: 'text' },
        auteurs: { type: 'text' },
        equipe: { type: 'text' },
        date: {
          type: 'nested',
          properties: {
            lte: { type: 'date' },
            gte: { type: 'date' },
          },
        },
        country: { type: 'text' },
      },
    },
  }, (err, resp, status) => {
    if (err) {
      console.error(err, status);
    } else {
      console.log(`${indexName} Successfully Created`, status, resp);
    }
  });
}

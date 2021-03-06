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
        poste: { type: 'text' },
        equipe: { type: 'text' },
        date: {
          type: 'nested',
          properties: {
            lte: { type: 'date' },
            gte: { type: 'date' },
          },
        },
        current: { type: 'boolean' },
        country: { type: 'text' },
      },
    },
  }, (err, resp, status) => {
    if (err) {
      console.error(err, status);
    } else {
      console.info(`🚀 L'index ${indexName} est crée`);
    }
  });
}

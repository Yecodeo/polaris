import userIndex from './indicies/user';
import countryIndex from './indicies/country';

/**
 * load index et create them if not exist
 * @param {*} client
 * @param {*} index
 */
export default function checkIndices(client) {
  const indicies = [
    {
      index: 'user',
      mapping: userIndex,
    },
    {
      index: 'country',
      mapping: countryIndex,
    },

  ];

  indicies.forEach((module) => {
    client.indices.exists({ index: module.index }, (err, res) => {
      if (res.statusCode !== 404) {
        console.info(`L'index ${module.index} existe déjà`, res.statusCode);
      } else {
        client.indices.create({ index: module.index }, (error, response, state) => {
          // create mapping
          module.mapping.default(client);
          console.info(error, response, state);
        });
      }
    });
  });
}

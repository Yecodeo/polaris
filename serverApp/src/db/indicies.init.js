import userIndex from './mapping/user';
import countryIndex from './mapping/country';
import affiliationIndex from './mapping/affiliation';

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
    {
      index: 'affiliation',
      mapping: affiliationIndex,
    },

  ];

  indicies.forEach((module) => {
    client.indices.exists({ index: module.index }, (err, res) => {
      if (res.statusCode !== 404) {
        console.info(`L'index ${module.index} existe déjà`, res.statusCode);
      } else {
        client.indices.create({ index: module.index }, (error, response, state) => {
          // create mapping
          if (module) {
            module.mapping(client);
          }
          console.info(error, response, state);
        });
      }
    });
  });
}

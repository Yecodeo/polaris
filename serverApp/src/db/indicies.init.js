import userMapping from './mapping/user';
import countryMapping from './mapping/country';
import affiliationMapping from './mapping/affiliation';
import publicationMapping from './mapping/publication';
/**
 * load index et create them if not exist
 * @param {*} client
 * @param {*} index
 */
export default function checkIndices(client) {
  const indicies = [
    {
      index: 'user',
      mapping: userMapping,
    },
    {
      index: 'publication',
      mapping: publicationMapping,
    },
    {
      index: 'country',
      mapping: countryMapping,
    },
    {
      index: 'affiliation',
      mapping: affiliationMapping,
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

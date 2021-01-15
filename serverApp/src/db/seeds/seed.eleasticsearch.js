import axios from 'axios';
import country from './data/countries.json';
import user from './data/users.json';
import organisation from './data/organisation.json';
import publication from './data/publication.json';

const uri = 'http://localhost:9200';

const seeds = [{
  name: 'country',
  json: country,
},
{
  name: 'user',
  json: user,
},
{
  name: 'organisation',
  json: organisation,
},
{
  name: 'publication',
  json: publication,
},
];

seeds.map(async (seed) => {
  // delete documents
  await axios.post(`${uri}/${seed.name}/_delete_by_query`, {
    query: {
      match_all: {},
    },
  }).then((res) => {
    if (res) {
      console.info(`🚩Nettoyage de l'index ${seed.name} achevé`);
    }
  }).catch((error) => {
    console.error(error);
  });

  // seed data base
  await seed.json.forEach((el) => {
    axios.post(`${uri}/${seed.name}/_doc`, el).then(() => {

    }).catch((error) => {
      console.error(error);
    });
  });
  console.info(`🚀 Félicitation, la création du mapping ${seed.name} est fini`);
});

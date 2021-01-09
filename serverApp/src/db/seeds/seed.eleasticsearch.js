import axios from 'axios';
const uri = `http://localhost:9200`;

const seeds = [{
		name: 'country',
		json: require('./data/countries.json'),
	},
	{
		name: 'user',
		json: require('./data/users.json')
	},
]

seeds.map(async (seed) => {
	// delete documents
	axios.post(`${uri}/${seed.name}/_delete_by_query`, {
		"query": {
			"match_all": {}
		}
	}).then(res => {
		console.log(res)
	}).catch(error => {
		console.error(error)
	});

	// seed data base
	seed.json.forEach(el => {
		axios.post(`${uri}/${seed.name}/_doc`, el).then(response => {
			console.log(response)
		}).catch(error => {
			console.error(error)
		});
	})

});
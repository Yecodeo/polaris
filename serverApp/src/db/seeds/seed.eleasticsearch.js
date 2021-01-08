const { Client } = require('@elastic/elasticsearch')
const client = new Client({
	node: `http://elasticsearch:9200`
});

const seeds = [
	{
		name: 'country',
		json: require('./data/countries.json'),
	},
	{
		name: 'publication',
		json: require('./data/publication.json')
	},
	{
		name: 'user',
		json: require('./data/users.json')
	},	
]
seeds.map((seed) => {
	client.indices.exists({index: seed.name}, (err, res, status) => {
		if (res.statusCode === 404 || null) {
			pushBulk(seed.json, seed.name);
		}
	})
})

async function pushBulk(data, index) {	
	// prepare array for bulk
	const body = data.flatMap(doc => [{ index: { _index: index } }, doc])

	const { body: bulkResponse } = await client.bulk({ refresh: true, body })
	console.log(bulkResponse.items)
	if (bulkResponse.errors) {
		const erroredDocuments = []
		bulkResponse.items.forEach((action, i) => {
		const operation = Object.keys(action)[0]
		if (action[operation].error) {
			erroredDocuments.push({

			status: action[operation].status,
			error: action[operation].error,
			operation: body[i * 2],
			document: body[i * 2 + 1]
			})
		}
		})
		console.log(erroredDocuments)

		const { body: count } = await client.count({ index: index })
		console.log(`${count.count} added`)
	}
}
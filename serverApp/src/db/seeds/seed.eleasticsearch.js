import elastic from '../elastic';

const client = elastic.getInstance();

const seeds = [
	{
		name: 'country',
		json: require('./data/countries.json'),
	},
	// {
	// 	name: 'publication',
	// 	json: require('./data/publication.json')
	// },
	{
		name: 'user',
		json: require('./data/users.json')
	},	
]
client.deleteByQuery({
	index: 'user',
	body: {
		query: {
			match_all: {}
		}
	}
}).then(res => {
	console.info('drop documents done.')
	seeds.map((seed) => {
		pushBulk(seed.json, seed.name);
	})
}).catch(err => console.error(err))

async function pushBulk(data, index) {	
	// prepare array for bulk
	console.info('seending index...')
	const body = data.flatMap(doc => [{ index: { _index: index } }, doc])

	const { body: bulkResponse } = await client.bulk({ refresh: true, body })

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

	}
	const { body: count } = await client.count({ index: index })
	console.log(`${count.count} inserted`)
}
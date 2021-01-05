import esClient from './esClient';
const client = esClient.getInstance();

async function run() {
	await client.indices.create({
		index: 'publication',
		body: {
		  mappings: {
			  type_name: {
				properties: {
					title: { type: 'text' },
					owner: { type: 'text' },
					auteurs: {type: 'text'},
					annee: { type: 'integer' },
					lang: { type: 'text' }
				}
			}
		  }
		}
	  }, { ignore: [400] })

let dataset = [
	{
		"title": "l'argent dans l'espace économique european",
		"owner": "1",
		"auteurs": ["Marc Temsit", "Cyril"],
		"annee": 1988, 
		"lang": "Français"
	
	},
	{
		"title": "Le role de la BCE",
		"owner": "1",
		"auteurs": ["Duchovny Marcel", "David Akvor"],
		"annee": 2017, 
		"lang": "Français"
	
	},
	{
		"title": "EU economy is the new threat",
		"owner": "2",
		"auteurs": ["Marc Temsit", "Ernerto ORO"],
		"annee": 2020, 
		"lang": "anglais"
	
	},
	{
		"title": "Brexit, the back stab",
		"owner": "3",
		"auteurs": ["Javier Almeida", "James mcAvoy"],
		"annee": 1988, 
		"lang": "anglais"
	
	}
]

const body = dataset.flatMap(doc => [{ index: { _index: 'publication' } }, doc])

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

  const { body: count } = await client.count({ index: 'tweets' })
  console.log(count)

}

run().catch(console.log);

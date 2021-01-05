import dataset from './data/countries.json';
import elastic from '../elastic';
const client = elastic.getInstance();

var payload ={
	index: "country",
	body: {  
	  settings: {
		analysis: {
		  analyzer: {
			indexing_analyzer: {
			  tokenizer: "whitespace",
			  filter:  ["lowercase", "edge_ngram_filter"]
			},
			search_analyze: {
			  tokenizer: "whitespace",
			  filter:  "lowercase"
			}
		 },
		 filter: {
			edge_ngram_filter: {
			   type: "edge_ngram",
			   min_gram: 1,
			   max_gram: 5
			 }
		   }
		 }
	   },
	  mappings:{
		world:{
		  properties:{
			name: {
			  type: "string",
			  analyzer:"indexing_analyzer",
			  search_analyzer: "search_analyze"
			}
		  }
		}
	  }
	}
  }
  
client.indices.exists({index: 'country'}, (err, res, status) => {
	if (res) {
		console.info(`the document country exit and it was seeded`);
	} else {
		client.indices.create( {index: 'country'}, (err, res, status) => {
			pushBulk(client)
		console.info(err, res, status);
	})
	}
})

function pushBulk() {
	client.indices.create(payload, async function(error, response){
	
	  const body = dataset.flatMap(doc => [{ index: { _index: 'country' } }, doc])
  
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
	
	  const { body: count } = await client.count({ index: 'country' })
	  console.log(count)
	
	});
}
import path from 'path';
const indexName = path.basename(__filename).split('.')[0];

export default function (client) {
	client.indices.exists({index: indexName}, (err, res, status) => {
		if (res) {
			console.info(`L'index ${indexName} existe déjà`);
		} else {
			client.indices.create( {index: indexName}, (err, res, status) => {
			console.info(err, res, status);
		})
	  }
	})
}
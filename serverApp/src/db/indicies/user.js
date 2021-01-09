import path from 'path';
const indexName = path.basename(__filename).split('.')[0];

/**
 * set mapping of created index
 * @param {} client 
 */
export default function (client) {
	console.info(`creating ${indexName} mapping...`);
	client.indices.putMapping({
		index: indexName,
		body: {
			properties: { 
				prefix: { type: 'text'},
				firstname: { type: 'text' },
				lastname: { type: 'text' },
				profil: { type: 'nested' },
				publication: { 
					type: 'nested',
					properties: {
						title: { type: 'text' },
						auteurs: { type: 'text' },
						annee: { type: 'date' },
						lang: { type: 'text' }
					} 
				}
		}

	}
	}, (err,resp, status) => {
		if (err) {
			console.error(err, status);
		}
		else {
			console.log(`${indexName} Successfully Created`, status, resp);
		}
	});
}
import path from 'path';
const indexName = path.basename(__filename).split('.')[0];

export default function (client) {
	client.indices.exists({index: indexName}, (err, res, status) => {
		if (res) {
			console.info(`L'index ${indexName} existe déjà`);
		} else {
			client.indices.create( {index: indexName}, (err, res, status) => {
			setMapping(client);
			console.info(err, res, status);
		})
	  }
	})

		/**
	 * set mapping of created index
	 * @param {} client 
	 */
	function setMapping (client) {
		console.info(`creating ${indexName} mapping...`);
		client.indices.putMapping({
			index: indexName,
			body: {
			properties: { 
				firstname: { type: 'text' },
				lastname: { type: 'text' },
				profil: {
					properties: {
						aboutme: { type: 'text' },
						socials: { type: 'object' }, 
						organisation: { type: 'text' },
						team: { type: 'text'},
						date: { type: 'date_range'},
						country: { type: 'text'},
						avatar: { type: 'text'}
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
}
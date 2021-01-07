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
			settings: {
				index: {
					analysis: {
						analyzer: {
							analyzer_startswith: {
								tokenizer: 'keyword',
								filter: 'lowercase'
							}
						}
					}
				}
			},
			mappings: {
				country: {
					properties: {
						name: {
							search_analyzer: 'analyzer_startswith',
							index_analyzer: 'analyzer_startswith',
							type: 'string'
						}
					}
				}
			}
		}
	}, (err, resp, status) => {
		if (err) {
			console.error(`${indexName} [error]: `, err, status);
		} else {
			console.log(`${indexName} Successfully Created`, status, resp);
		}
	});
}
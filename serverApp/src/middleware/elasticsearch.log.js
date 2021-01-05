
/**
 * add every equery to log index
 * @param {*} client 
 */
export function esLog(client, req) {
	client.index({
		index: 'logs',
		body: {
			url: req.url,
			method: req.method
		}
	}).then(res => {
		console.log('Logs indexed')
	}).catch(err => {
		console.error(err);
	})
}
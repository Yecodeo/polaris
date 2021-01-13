/**
 * Foramte date to local format
 * @param {*} date 
 */
export default function (date) {
	if (date) {
		const options = {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			timeZone: 'Europe/Paris',
			formatMatcher: 'basic'
		};
		return new Intl.DateTimeFormat('fr', options).format(new Date(date));
	}
}
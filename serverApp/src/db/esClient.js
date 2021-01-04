import elasticsearch from 'elasticsearch';

/**
 * Connexion manager singleton pattern
 */
export default (function() {
	let instance;

	return {
		getInstance: function() {
			if (!instance) {
				instance = new elasticsearch.Client({
					host: `http://${process.env.DB}:9200`
				});
				delete instance.constructor;
			}
			return instance;
		}
	}
})();
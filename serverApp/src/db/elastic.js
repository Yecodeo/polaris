import elasticsearch from 'elasticsearch';
import {checkIndices} from './indicies.init';


/**
 * Connexion manager singleton pattern
 */
export default (function() {
	let instance;

	return {
		getInstance: function() {
			if (!instance) {
				instance = new elasticsearch.Client({
					host: `http://${process.env.DB || 'localhost' }:9200`
				});
				delete instance.constructor;
				// create indicies if not created
				checkIndices(instance);
			}
			return instance;
		}
	}
})();
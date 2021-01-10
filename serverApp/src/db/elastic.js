import checkIndices from './indicies.init';

const { Client } = require('@elastic/elasticsearch');

/**
 * Connexion manager singleton pattern
 */
export default (function () {
  let instance;

  return {
    getInstance() {
      if (!instance) {
        instance = new Client({
          node: `http://${process.env.DB || 'localhost'}:9200`,
        });
        delete instance.constructor;
        // create indicies if not created
        checkIndices(instance);
      }
      return instance;
    },
  };
}());

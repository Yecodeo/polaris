/**
 * Allow calling apis from foreign domain
 * @param {*} router
 */
export default function cors(router) {
  router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
}

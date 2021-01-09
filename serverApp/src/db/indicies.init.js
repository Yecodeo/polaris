/**
 * load index et create them if not exist
 * @param {*} client 
 * @param {*} index 
 */
export function checkIndices(client) {
    const indicies = [
        {
            index: 'user',
            mapping: require('./indicies/user')
        },
        {
            index: 'country',
            mapping: require('./indicies/country')
        }
       
    ]

    indicies.forEach(function (module)  {
        client.indices.exists({index: module.index}, (err, res, status) => {
            if (res.statusCode !== 404) {
                console.info(`L'index ${module.index} existe déjà`, res.statusCode);
            } else {
                client.indices.create( {index: module.index}, (err, res, status) => {
                // create mapping
                module.mapping.default(client);     
                console.info(err, res, status);
            })
            }
        })

    })
}
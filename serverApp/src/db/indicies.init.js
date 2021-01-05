


/**
 * load index et create them if not exist
 * @param {*} client 
 * @param {*} index 
 */
export function checkIndices(client) {
    const indicies = [
        require('./indicies/profil'),
        require('./indicies/publication')
    ]
    indicies.forEach(function (module)  {
        module.default(client)
    })
}
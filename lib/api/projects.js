const Fetch = require('./fetch');


exports.get = (id) => {

    return Fetch.get(`projects${ id ? '/'+id : '' }.json?updatedAfterDate=20170101050000`).then((res) => id ? res.project : res.projects );
}
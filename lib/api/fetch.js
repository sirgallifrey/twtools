const fetch = require('node-fetch');
const Conf = require('../conf');

exports.get = (url) => {

    return fetch(`https://${Conf.get().subdomain}.teamwork.com/${url}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Basic ${new Buffer(Conf.get().token+':xxx').toString('base64')}`
        }
    })
    .then((response) => response.json())
    .then((json) => { 
        if (json.STATUS !== 'OK') {
            throw new Error(json.MESSAGE);
        }
        return json
    });
}

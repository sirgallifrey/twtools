const Fs = require('fs');
const Path = require('path');

let confRef = null;
//TODO: test this all
exports.get = () => {

    if (confRef) {
        return confRef;
    }

    try {
        return confRef =  require('../conf/conf.json');
    } catch (e) {
        return null;
    }
}

exports.write = (obj) => {

    let conf = exports.get();


    if (conf) {
        Object.assign(conf, obj);
    } else {
        confRef = Object.assign({}, obj);
    }

    Fs.writeFileSync(Path.join(__dirname, '../conf/conf.json'), JSON.stringify(confRef, null, 4));
}

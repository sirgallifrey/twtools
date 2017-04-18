const Fs = require('fs');
const Path = require('path');

exports.get = () => {

    try {
        return Fs.readFileSync(Path.join(__dirname, '../conf/conf.json'), { encoding: 'utf8' });
    } catch (e) {
        return null;
    }
    
}

exports.write = (obj) => {

    let conf = exports.get();

    conf = conf ? Object.assign({}, conf, obj) : obj;

    Fs.writeFileSync(Path.join(__dirname, '../conf/conf.json'), JSON.stringify(conf, null, 4));
}

#!/usr/bin/env node

const Fs = require('fs');
const Path = require('path');

let nodeModulesStat = null;

try {
    nodeModulesStat = Fs.statSync(Path.join(__dirname, '../node_modules'));
} catch(e) {
    //supress this soab
}
 finally {

    if (nodeModulesStat && nodeModulesStat.isDirectory()) {
        require('../');
    } else {
        console.log('Installing dependencies...');
        require('child_process').exec('npm i --progress=false', (error, stdout, stderr) => {
            if (error) {
                console.error(`npm install error: ${error}`);
                process.exit(1);
            }
            require('../');
        });
    }
}
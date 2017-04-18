const Inquirer = require('inquirer');
const Chalk = require('chalk');
const Conf = require('./lib/conf');
let conf = Conf.get();

let thePromise = null;

if (!conf) {

    thePromise = require('./lib/configure').prompt().then(() => {
        
        require('./lib/mainMenu').prompt();
    })
} else {

    thePromise = require('./lib/mainMenu').prompt();
}

thePromise.catch((err) => {

    process.nextTick(() => {

        console.error(Chalk.red(err.message));
        console.error(Chalk.red(err.stack));
        process.exit(1);
    })
});



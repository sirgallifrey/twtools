const Inquirer = require('inquirer');
const Chalk = require('chalk');
const Conf = require('./conf');
let conf = Conf.get();

exports.prompt = () => {

    console.log(Chalk.yellow('================================================='));

    return Inquirer.prompt({
        type: 'list',
        name: 'indexMenu',
        message: 'Escolha uma das opções abaixo:',
        choices: [
            {
                name: 'Set Project',
                value: 'setProject'
            },
            {
                name: 'Configurar',
                value: 'configure'
            }
        ]
    }).then((answers) => {

        return require(`./${answers['indexMenu']}`).prompt();
    })
}

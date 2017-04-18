const Inquirer = require('inquirer');
const Chalk = require('chalk');
const Conf = require('./conf');
let conf = Conf.get();

exports.prompt = () => {

    console.log('\n\n');
    console.log(Chalk.bold.green('Menu'));
    console.log(Chalk.dim.green('Escolha o uma opção abaixo'));
    console.log(Chalk.yellow('================================================='), '\n\n');

    return Inquirer.prompt({
        type: 'list',
        name: 'indexMenu',
        message: 'Escolha uma das opções abaixo:',
        choices: [
            {
                name: 'Restaurar Backup',
                value: 'restore'
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

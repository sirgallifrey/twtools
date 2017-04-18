const Inquirer = require('inquirer');
const Chalk = require('chalk');
const Fs = require('fs');
const Path = require('path');
const Conf = require('./conf');

exports.prompt = () => {

    console.log('\n');
    console.log(Chalk.bold.green('Configuração'));
    console.log(Chalk.dim.green('Escolha o valor de cada chave de configuração'));
    console.log(Chalk.yellow('================================================='), '\n\n');

    return Inquirer.prompt([
        {
            type: 'input',
            name: 'subdomain',
            message: 'Your Teamwork subdomain.',
            default: '',
        },
        {
            type: 'input',
            name: 'token',
            message: 'Api token. Warning: it will be saved as text',
            default: ''
        },
    ]).then((answers) => {

        Conf.write(answers);
    });
}
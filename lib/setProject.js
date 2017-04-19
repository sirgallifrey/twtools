const Inquirer = require('inquirer');
const Chalk = require('chalk');
const Fs = require('fs');
const Path = require('path');
const Conf = require('./conf');
const Projects = require('./api/projects');

exports.prompt = () => {

    console.log(Chalk.yellow('================================================='), '\n');

    return Projects.get().then((projects) => {
        
        projects.map((p) => console.log(p.name));
        return Inquirer.prompt([
            {
                type: 'input',
                name: 'subdomain',
                message: 'Your Teamwork subdomain.',
                default: '',
            }
        ]);
    })
    .then((answers) => {

        Conf.write(answers);
    });
}
// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import { type } from 'os';

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
    {
        type: 'input',
        message: 'What is the Title of your Project?',
        name: 'projTitle'
    },
    {
        type: 'input',
        message: 'Please give a brief description of your Project',
        name: 'projDesc'
    },
    {
        type: 'input',
        message: 'What are the instructions for installation?',
        name: 'installInstruct'
    },
    {
        type: 'input',
        message: 'What is the usage information for your project?',
        name: 'usageInfo'
    },
    {
        type: 'input',
        message: 'What are the Contribution Guidelines for your project?',
        name: 'projContrib'
    },
    {
        type: 'input',
        message: 'What are the Test Instructions for your project?',
        name: 'testDirects'
    },    
]);

const projLicense = await Selection({
    message: 'Which License is your project using?',
    choices: [
        {
            name: 'AFL-3.0',
            value: 'AFL-3.0',
            description: 'Academic Free License v3.0',
        },
        {
            name: 'Apache-2.0',
            value: 'Apache-2.0',
            description: 'Apache license 2.0',
        },
        {
            name: 'Artistic-2.0',
            value: 'Artistic-2.0',
            description: 'Artistic license 2.0',
        },
        {
            name: 'BSL-1.0',
            value: 'BSL-1.0',
            description: 'Boost Software License 1.0',
        },
        {
            name: 'BSD-2-Clause',
            value: 'BSD-2-Clause',
            description: 'BSD 2-clause "Simplified" license',
        },
    ]
})
    


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

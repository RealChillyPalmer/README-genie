import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

inquirer
    .prompt([
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
            message: 'What are the instructions for installation? *include dependencies',
            name: 'installInstruct'
        },
        {
            type: 'input',
            message: 'How do you run the apllication?',
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

        {   type: 'list', 
            name: 'userLicense',
            message: 'Which License is your project using?',
            choices: [
                {
                    name: 'No License',
                    value: 'No%20License',
                    description: 'No License',
                },
                {
                    name: 'AFL-3.0',
                    value: 'AFL3.0',
                    description: 'Academic Free License v3.0',
                },
                {
                    name: 'Apache-2.0',
                    value: 'Apache2.0',
                    description: 'Apache license 2.0',
                },
                {
                    name: 'Artistic-2.0',
                    value: 'Artistic2.0',
                    description: 'Artistic license 2.0',
                },
                {
                    name: 'BSL-1.0',
                    value: 'BSL1.0',
                    description: 'Boost Software License 1.0',
                },
                {
                    name: 'BSD-2-Clause',
                    value: 'BSD2Clause',
                    description: 'BSD 2-clause "Simplified" license',
                },
                {
                    name: 'BSD-3-Clause',
                    value: 'BSD3Clause',
                    description: 'BSD 3-clause "New" or "Revised" license',
                },
                {
                    name: 'BSD-3-Clause-Clear',
                    value: 'BSD3ClauseClear',
                    description: 'BSD 3-clause Clear license',
                },
                {
                    name: 'BSD-4-Clause',
                    value: 'BSD4Clause',
                    description: 'BSD 4-clause "Original" or "Old" license',
                },
                {
                    name: '0BSD',
                    value: '0BSD',
                    description: 'BSD Zero-Clause license',
                },
                {
                    name: 'CC',
                    value: 'CC',
                    description: 'Creative Commons license family',
                },
                {
                    name: 'CC0-1.0',
                    value: 'CC01.0',
                    description: 'Creative Commons Zero v1.0 Universal',
                },
                {
                    name: 'CC-BY-4.0',
                    value: 'CCBY4.0',
                    description: 'Creative Commons Attribution 4.0',
                },
                {
                    name: 'CC-BY-SA-4.0',
                    value: 'CCBYSA4.0',
                    description: 'Creative Commons Attribution ShareAlike 4.0',
                },
                {
                    name: 'WTFPL',
                    value: 'WTFPL',
                    description: 'Do What The F*ck You Want To Public License',
                },
                {
                    name: 'ECL-2.0',
                    value: 'ECL2.0',
                    description: 'Educational Community License v2.0',
                },
                {
                    name: 'EPL-1.0',
                    value: 'EPL1.0',
                    description: 'Eclipse Public License 1.0',
                },
                {
                    name: 'EPL-2.0',
                    value: 'EPL2.0',
                    description: 'Eclipse Public License 2.0',
                },
                {
                    name: 'AGPL-3.0',
                    value: 'AGPL3.0',
                    description: 'GNU Affero General Public License v3.0',
                },
                {
                    name: 'GPL',
                    value: 'GPL',
                    description: 'GNU General Public License family',
                },
                {
                    name: 'GPL-2.0',
                    value: 'GPL2.0',
                    description: 'GNU General Public License v2.0',
                },
                {
                    name: 'GPL-3.0',
                    value: 'GPL3.0',
                    description: 'GNU General Public License v3.0',
                },
                {
                    name: 'LGPL',
                    value: 'LGPL',
                    description: 'GNU Lesser General Public License family',
                },
                {
                    name: 'LGPL-2.1',
                    value: 'LGPL2.1',
                    description: 'GNU Lesser General Public License v2.1',
                },
                {
                    name: 'LGPL-3.0',
                    value: 'LGPL3.0',
                    description: 'GNU Lesser General Public License v3.0',
                },
                {
                    name: 'ISC',
                    value: 'ISC',
                    description: 'ISC',
                },
                {
                    name: 'LPPL-1.3c',
                    value: 'LPPL1.3c',
                    description: 'LaTeX Project Public License v1.3c',
                },
                {
                    name: 'MS-PL',
                    value: 'MSPL',
                    description: 'Microsoft Public License',
                },
                {
                    name: 'MIT',
                    value: 'MIT',
                    description: 'MIT',
                },
                {
                    name: 'MPL-2.0',
                    value: 'MPL2.0',
                    description: 'Mozilla Public License 2.0',
                },
                {
                    name: 'OSL-3.0',
                    value: 'OSL3.0',
                    description: 'Open Software License 3.0',
                },
                {
                    name: 'PostgreSQL',
                    value: 'PostgreSQL',
                    description: 'PostgreSQL License',
                },
                {
                    name: 'OFL-1.1',
                    value: 'OFL1.1',
                    description: 'SIL Open Font License 1.1',
                },
                {
                    name: 'NCSA',
                    value: 'NCSA',
                    description: 'University of Illinois/NCSA Open Source License',
                },
                {
                    name: 'Unlicense',
                    value: 'Unlicense',
                    description: 'The Unlicense',
                },
                {
                    name: 'Zlib',
                    value: 'Zlib',
                    description: 'Lib License',
                },

            ],
        },
        {
            type: 'input',
            message: 'Aknowledgements?',
            name: 'userAk'
        },
        {
            type: 'input',
            message: 'What is your Github Username?',
            name: 'userGHub'
        },
        {
            type: 'input',
            message: 'What is your Email?',
            name: 'userEmail'
        }
    ])
    .then((projAnswers) => {
        console.log(projAnswers);
        const readmeAnswers = generateMarkdown(projAnswers);

        fs.writeFile(`${projAnswers.projTitle}.md`, readmeAnswers, (err) =>
            err ? console.log(err) : console.log("Your README is My Command!")
        );
    }
    
    );
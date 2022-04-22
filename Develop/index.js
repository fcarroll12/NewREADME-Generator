// TODO: Include packages needed for this application

// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Write code to get user input, generate markdown, and save it to a file.
const init = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What is required to install your project?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What are some instructions for usage?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: [
            {
                name: 'MIT',
                // value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            }, 
            {
                name: 'GPLv3',
                // value: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
            },
            {
                name: 'ISC',
            //     value: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            },
            {
                name: 'Apache 2.0',
                // value: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            }, 
            {
                name: 'BSD-3',
                // value: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
            },
        ],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Were there any collaborators or contributors to your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How do you run tests for your application?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address where users can reach you with additional questions?',
      },
    ])
    .then((response) => {
      const readmeContent = generateMarkdown(response);
  
      fs.writeFile('README.md', readmeContent, (err) =>
        err ? console.log(err) : console.log('You have succesfully created a README!')
      );
    });
}

init();

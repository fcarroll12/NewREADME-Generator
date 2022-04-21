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
        choices: ['MIT', 'GNU', 'Apache','Mozilla', 'BSD']
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

// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
//create license badge to be assigned to corresponding license user picks
function createLicenseBadge(license) {
    if (license === 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    }
    if (license === 'GPLv3') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    }
    if (license === 'ISC') {
        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    } 
    if (license === 'Apache 2.0') {
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    }
    if (license === 'BSD-3') {
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    }
}

function generateMarkdown(data) { 
    return `# ${data.title}

    ${createLicenseBadge(data.license)}


    ## Description
    ${data.description}
    ## Table of Contents: 
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation 
    ${data.installation}

    ## Usage
    ${data.usage}

    ## License
    This application is covered under:
    ${data.license}

    ## Contributing 
    ${data.contributing}

    ## Tests 
    ${data.tests}

    ##  Questions
    If you have any additional questions feel free to contact me at:
    [GitHub](https://github.com/${data.github}) or by email at ${data.email}
    
  `;
  }
  
  module.exports = generateMarkdown;
  
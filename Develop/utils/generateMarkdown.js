// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function createLicenseBadge(license) {
    return `# ${}`
}

function generateMarkdown(data) { 
    return `# ${data.title}

    ## Table of Contents: 
    - [Description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Credits](#Credits)
    - [License](#License)
    - [Contributing](#Contributing)
    - [Tests](#Tests)
    - [Questions](#Questions)

    ## Description
    ${data.description}

    ##Installation 
    ${data.installation}

    ##Usage
    ${data.usage}

    ##License
    ${createLicenseBadge(data.license)}

    ##Contributing 
    ${data.contributing}

    ##Tests 
    ${data.tests}

    ##Questions
    If you have any additional questions feel free to contact me at:
    [GitHub](https://github.com/${data.github}) or by email at ${data.email}
    
  `;
  }
  
  module.exports = generateMarkdown;
  
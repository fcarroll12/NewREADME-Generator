# NewREADME-Generator



## User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

## Description
I built this Professional README Generator so that a developer could quickly, and easily, generate a professional README File. It uses node.js and allows the user to input all of the typical sections a Professional README provides. At the top of the readme, it generates a badge that correspondes to which license a user chose. It also has a section at the bottom under 'Questions' for a user to input their personal GitHub username and email address. I learned a lot about inquirer as well as template literals solving this assignment. 

Here is a link to a video displaying the typical user flow of the application: https://drive.google.com/file/d/1sIQGd-W0g0vrBz6T1l1uRoys7ehIw5Vo/view


## Usage

Open your integrated terminal and type the command 'node index.js.' This will begin the command-line application and accept your input. Provide answers to each question and your README will be successfully generated.  

    ```md
    ![alt text](assets/`images/screenshot.png)
    ```

## Credits

GitHub: https://github.com/fcarroll12/NewREADME-Generator





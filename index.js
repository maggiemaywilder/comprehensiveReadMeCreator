// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const md = require('./utils/generateMarkdown');



// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions

// TODO: Create an array of questions for user input
const questions = [
    'What is your Github username?', 
    'What is your email address?', 
    'What is the title of your project?', 
    'What description would you like added?', 
    'What kind of license should your project have?', 
    'What command should be run to install dependencies?', 
    'What does the user need to know about using this repo?', 
    'What guidelines should the user follow for contribution?',
    'How can the user test this project?'
];

// TODO: Create a function to write README file
function writeToFile(data) { 
    console.log(data);
    let md = generateMarkdown(data);
    fs.writeFile(path.join(__dirname,'output','README.md'), md, (err) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Write file complete.");
        }
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt([
        {
            type:'input',
            name: 'username',
            message: questions[0],
        },
        {
            type:'input',
            name: 'emailAddress',
            message: questions[1],
        },
        {
            type:'input',
            name: 'projectTitle',
            message: questions[2],
        },
        {
            type:'input',
            name: 'description',
            message: questions[3],
        },
        {
            type:'list',
            name: 'license',
            message: questions[4],
            choices: ['Apache-2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'GPL-3.0', 'LGPL-3.0', 'MIT', 'MPL-2.0', 'CDDL-1.0', 'EPL-2.0', 'none'],
        },
        {
            type:'input',
            name: 'dependencies',
            message: questions[5], //need default npm i
        },
        {
            type:'input',
            name: 'usageInfo',
            message: questions[6],
        },
        {
            type:'input',
            name: 'contribution',
            message: questions[7],
        },        
        {
            type:'input',
            name: 'testInstructions',
            message: questions[8],  //default nmp test?
        },
    ]
    ).then((answers) => {
        writeToFile(answers);
    });
}

// Function call to initialize app
init();
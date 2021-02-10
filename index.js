// TODO: Include packages needed for this application
const md = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, Questions

// TODO: Create an array of questions for user input
const questions = ['What is your Github username?', 'What is your email address?', 'What is the title of your project?', 'What description would you like added?', 'What kind of license should your project have?', 'What command should be run to install dependencies?', 'What does the user need to know about using this repo?', 'What guidelines should the user follow for contribution?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
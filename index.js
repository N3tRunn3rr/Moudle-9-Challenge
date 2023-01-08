// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ([
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title",
        validate: (value) => { if(value){return true} else {return 'You must enter a value to continue'}}
    },
    {
        type: "input",
        message: "Please provide a table of contents",
        name: "table of contents",
        
    },
    {
        type: "input",
        message: "What is the description of the project?",
        name: "description",
        validate: (value) => { if(value){return true} else {return 'You must enter a value to continue'}}
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation",
        validate: (value) => { if(value){return true} else {return 'You must enter a value to continue'}}
    },
    { 
        type: "input",
        message: "What is the use of this project?",
        name: "usage",
        validate: (value) => { if(value){return true} else {return 'You must enter a value to continue'}}
    },
    {
        type: "list",
        message: "What license did you use?",
        name: "license",
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'N/A'],
        validate: (value) => { if(value){return true} else {return 'You must enter a value to continue'}}
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution",
        validate: (value) => { if(value){return true} else {return 'You must enter a value to continue'}}
    },
    {
        type: "input",
        message: "What are the testing instructions?",
        name: "tests",
        validate: (value) => { if(value){return true} else {return 'You must enter a value to continue'}}
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
        err ? console.log(err) : console.log('Successfully created ReadMe!')
        )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        let content = generateMarkdown(data)
        writeToFile('readMe.md', content)
    }).catch(function(err) {
        console.log(err)
    });
}

// Function call to initialize app
init();


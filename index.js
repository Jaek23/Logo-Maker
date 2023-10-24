const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./utils/generateLogo')

//Prompt questions for logo requirements 
const questions = [
    {
        type: 'input',
        message: 'Enter text for the logo. (Must not be more than 3 characters.)',
        name: 'text',
    },

    {
        type: 'input',
        message: 'Enter a text color (OR a hexadecimal number).',
        name: 'textcolor',
    },

    {
        type: 'list',
        message: 'Select a shape for the logo.',
        choices: ["Circle", "Square", "Triangle"],
        name: 'shape',
    },

    {
        type: 'input',
        message: 'Enter a shape color (OR a hexadecimal number).',
        name: 'shapecolor',
    },

]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err){
        if (err){
            return console.log(err)
        }
        else {
            console.log("Generated logo.svg")
        }
    })
 }

 function init() {
    inquirer.prompt(questions)
    .then (function(data){
        writeToFile('logo.svg', generateLogo((data)));
    }) 
}

init();

//inquirer.prompt(questions)


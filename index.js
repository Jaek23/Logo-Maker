const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./utils/generateLogo')

//Prompt questions for logo requirements 
const questions = [
    {
        type: 'list',
        message: 'Select a shape for the logo.',
        choices: ["Circle", "Square", "Triangle"],
        name: 'shape',
    },

    {
        type: 'input',
        message: 'Enter text for the logo. (Must not be more than 3 characters.)',
        name: 'text',
    },
    {
        type: 'input',
        message: 'Enter a color (OR a hexadecimal number).',
        name: 'text_color',
    },
    {
        type: 'input',
        message: 'Enter a shape color (OR a hexadecimal number).',
        name: 'shape_color',
    },

];

function writeToFile(fileName, data) {
    console.log("Data to be written:", data);
    fs.writeFile(fileName, data, function (error){
        if (error){
            return console.log(error)
        }
        console.log("Generated logo.svg")  
    });
 }

 function init() {
    inquirer.prompt(questions)
    .then (function(data){
        writeToFile('logo.svg', generateLogo((data)));
    });
}

init();




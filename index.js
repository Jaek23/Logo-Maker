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
        name: 'text_color',
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
        name: 'shape_color',
    },

];

function writeToFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFile(fileName, content, function (error){
        if (error){
            return console.log(error)
        }
        console.log("Generated logo.svg")  
    });
 }

 function init() {
    inquirer.prompt(questions)
    .then (function(data){
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

init();

//inquirer.prompt(questions)


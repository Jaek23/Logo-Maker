const inquirer = require('inquirer');

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
        name: 'text-color',
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
        name: 'shape-color',
    },

];
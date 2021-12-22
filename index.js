// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// import fs from 'fs';

// specify how the user provides their config preferences
const questions = [{
        type: 'input',
        message: 'Please enter the title of your project: ',
        name: 'title',
        default () {
            return 'Holly & Geese';
        }
    },
    {
        type: 'input',
        message: 'Please enter a short description: ',
        name: 'description',
        default () {
            return 'A cool little lap';
        }
    },
    {
        type: 'input',
        message: 'Please enter some installation instructions: ',
        name: 'installation',
        default () {
            return 'Check out the source code and see how it runs!';
        }
    },
    {
        type: 'input',
        message: 'Please enter some contribution guidelines: ',
        name: 'guidelines',
        default () {
            return 'Fork this repo, and submit a PR with detailed notes!';
        }
    },
    {
        type: 'input',
        message: 'Please enter some testing instructions: ',
        name: 'testing',
        default () {
            return 'Go ahead, try and break it... 🙄';
        }
    },
    {
        type: 'list',
        message: 'Which license would you like? ',
        name: 'license',
        choices: ['Apache 2.0', 'GNU v3.0', 'MIT License', 'BSD "Simplified"', 'BSD "New"', 'Boost 1.0', 'Creative Commons v1.0', 'Eclipse 2.0', 'GNU Affero v3.0', 'GNU v2.0', 'GNU v2.1', 'Mozilla Public 2.0', 'The Unlicense'],
        default () {
            return 'GNU v3.0';
        }
    },
    {
        type: 'input',
        message: 'Please enter your GitHub handle : ',
        name: 'github',
        default () {
            return 'theresaqueryforthat';
        }
    },
    {
        type: 'input',
        message: 'Please enter the email you would like to display for this readme : ',
        name: 'email',
        default () {
            return 'test@tester';
        }
    }
];

inquirer
    .prompt(questions)
    .then((response) => {
        // console.log(response.title);
        // console.log(response.description);
        // console.log(response.installation);
        // console.log(response.guidelines);
        // console.log(response.testing);
        // console.log(response.license);
        // console.log(response.github);
        // console.log(response.email);

        let data = {
            title: response.title,
            description: response.description,
            installation: response.installation,
            guidelines: response.guidelines,
            testing: response.testing,
            license: response.license,
            github: response.github,
            email: response.email
        }

        console.log(data);
    })


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

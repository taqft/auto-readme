// include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const fsPromises = fs.promises;

// specify how the user provides their config preferences
const questions = [{
        type: 'input',
        message: 'Please enter the title of your project (Repo Name): ',
        name: 'title',
        default () {
            return 'auto-readme';
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
    }, {
        type: 'input',
        message: 'Please enter some usage instructions: ',
        name: 'usage',
        default () {
            return `1. Clone the repo
\`\`\`sh
git clone https://github.com/your_username_/Project-Name.git
\`\`\`
2. Install NPM packages
\`\`\`sh
npm install
\`\`\`
3. Run index.js via Node
\`\`\`sh
node ./index.js
\`\`\``;
        }
    },
    {
        type: 'input',
        message: 'Please enter some general contribution guidelines: ',
        name: 'contributing',
        default () {
            return 'Fork this repo, and submit a PR with notes!';
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
    { // default to MIT license since the base layout comes from MIT license also
        type: 'list',
        message: 'Which license would you like? ',
        name: 'license',
        choices: ['Apache 2.0', 'GNU v3.0', 'MIT', 'BSD "Simplified"', 'BSD "New"', 'Boost 1.0', 'Creative Commons v1.0', 'Eclipse 2.0', 'GNU Affero v3.0', 'GNU v2.0', 'GNU v2.1', 'Mozilla Public 2.0', 'The Unlicense'],
        default () {
            return 'MIT';
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

// capture the 
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}.md`, data, err =>
        err ? console.error(err) : console.log('Saved Successfully!'))
}

function init() {
    console.log(`
  Hello and welcome to the auto-readme generator!
  The below options allow you to input the desired values, or simply
  press the enter key without providing a value if you wish to use the default.
  `);

    inquirer
        .prompt(questions)
        .then((response) => {

            let fileName = `README`
            let data = {
                title: response.title,
                description: response.description,
                installation: response.installation,
                usage: response.usage,
                contributing: response.contributing,
                testing: response.testing,
                license: response.license,
                github: response.github,
                email: response.email
            }
            const rawMarkdown = generateMarkdown(data);
            writeToFile(fileName, rawMarkdown);
        })
}

init();

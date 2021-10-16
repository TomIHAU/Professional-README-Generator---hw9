// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is your projects title?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this project?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "tests",
    message: "What tests has the project done?",
  },
  //   {
  //     type: "checkbox",
  //     name: "license",
  //     message: "What is your licenses is your project using?",
  //     choices: [ 'MIT','None']
  //   },
  {
    type: "input",
    name: "githubUser",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

//gh-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//HEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// TODO: Create a function to write README file  GitHub username
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answer) => {
      return generateMarkdown(answer);
    })
    .then((markdown) => {
      writeToFile("README.md", markdown);
    });
}

// Function call to initialize app
init();
//console.log(questions);

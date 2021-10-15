// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const js = require("js");
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
    message: "What is your projects title?",
  },
  {
    type: "input",
    name: "Table of Contents",
    message: "What is your projects title?",
  },
  {
    type: "input",
    name: "Installation",
    message: "What is your projects title?",
  },
  {
    type: "input",
    name: "Usage",
    message: "What is your projects title?",
  },
  {
    type: "input",
    name: "License",
    message: "What is your projects title?",
  },
  {
    type: "input",
    name: "Contributing",
    message: "What is your projects title?",
  },
  {
    type: "input",
    name: "Tests",
    message: "What is your projects title?",
  },
  {
    type: "input",
    name: "Questions",
    message: "What is your projects title?",
  },
];
//gh-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//HEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then //xxxxx
    ();
  writeToFile(
    "README.md" //xxxxxxxxx
  );
}

// Function call to initialize app
init();

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    name: "title",
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
  {
    type: "checkbox",
    name: "license",
    message: "What is your licenses is your project using?",
    choices: ["MIT", "APACHE 2.0", "Boost 1.0", "BSD 3"],
  },
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

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created README")
  );
}

(() => {
  inquirer
    .prompt(questions)
    .then((answer) => {
      return generateMarkdown(answer);
    })
    .then((markdown) => {
      writeToFile("ProREADME.md", markdown);
    });
})();

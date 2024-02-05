const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "header",
      },
      {
        type: "input",
        message: "Give a brief description of your project:",
        name: "description",
      },
      {
        type: "input",
        message: "How do you install this app?",
        name: "installation",
      },
      {
        type: "input",
        message: "Please type out instructions for using this app:",
        name: "usage",
      },
      {
        type: "list",
        message: "Please choose a licensing option for this project:",
        name: "license",
        choices: ["Apache", "MIT", "GNU", "Eclipse", "Mozilla", "None" ]
      },
      {
        type: "input",
        message: "How can others contribute to this project?",
        name: "contribution",
      },
      {
        type: "input",
        message: "How to run tests on this project:",
        name: "tests",
      },
      {
        type: "input",
        message: "What is your github username?",
        name: "github",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("generated_README.md",
    generateMarkdown(data),
    (err)=>err? console.log("error") : console.log("Generating README..."));
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("generated_README.md", data);
    });

}

// function call to initialize program
init();

const inquirer = require("inquirer");

const questions =
{
    type: "list",
    name: "team",
    message: "Who would you like to join your team?",
    choices: ["Emplyoee", "Enigneer", "Manager", "Intern"]
}
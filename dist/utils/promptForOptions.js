"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer = require("inquirer");
async function promptForOptions(options) {
    const questions = [];
    if (!options.size) {
        questions.push({
            type: 'number',
            name: 'size',
            message: 'What do you want the base size to be?',
        });
    }
    if (!options.scale) {
        questions.push({
            type: 'number',
            name: 'scale',
            message: 'What do you want the scale to be?',
        });
    }
    const answers = await inquirer.prompt(questions);
    return {
        ...options,
        size: options.size || parseInt(answers.size),
        scale: options.scale || parseFloat(answers.scale),
    };
}
exports.default = promptForOptions;

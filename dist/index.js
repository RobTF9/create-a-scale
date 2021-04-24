#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const parseArguments_1 = require("./utils/parseArguments");
const promptForOptions_1 = require("./utils/promptForOptions");
const css_1 = require("./template/css");
const chalk = require("chalk");
const optionsAreValid_1 = require("./validator/optionsAreValid");
async function cli(args) {
    let options = parseArguments_1.default(args);
    const answers = await promptForOptions_1.default(options);
    if (!optionsAreValid_1.default(answers)) {
        return;
    }
    options = answers;
    const content = css_1.default(answers.size, answers.scale, answers.breakpoints);
    fs.writeFile(options.out, content, (err) => {
        if (err) {
            console.error(err);
        }
        else {
            console.log(chalk.green(`Created your scale css file ${options.out} successfully`));
        }
    });
}
cli(process.argv);

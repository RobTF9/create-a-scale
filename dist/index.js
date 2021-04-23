#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const parseArguments_1 = require("./utils/parseArguments");
const promptForOptions_1 = require("./utils/promptForOptions");
const css_1 = require("./template/css");
const chalk = require("chalk");
async function cli(args) {
    let options = parseArguments_1.default(args);
    const answers = await promptForOptions_1.default(options);
    if (typeof answers.scale !== 'number' || Number.isNaN(answers.scale)) {
        console.error('Scale is not a number');
    }
    else if (typeof answers.size !== 'number' || Number.isNaN(answers.size)) {
        console.error('Size is not a number');
    }
    else {
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
}
cli(process.argv);

#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseArguments_1 = require("./utils/parseArguments");
const promptForOptions_1 = require("./utils/promptForOptions");
const css_1 = require("./template/css");
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
        return console.log(css_1.default(answers.size, answers.scale, answers.breakpoints));
    }
}
cli(process.argv);

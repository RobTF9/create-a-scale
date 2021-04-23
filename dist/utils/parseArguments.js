"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arg = require("arg");
function parseArguments(raw) {
    const args = arg({
        '--out': String,
        '--size': Number,
        '--scale': Number,
        '--break': [Number],
    }, {
        argv: raw.slice(2),
    });
    return {
        size: args['--size'],
        scale: args['--scale'],
        out: args['--out'] || './scale.css',
        breakpoints: args['--break'] || false,
    };
}
exports.default = parseArguments;

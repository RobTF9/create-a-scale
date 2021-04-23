"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arg = require("arg");
function parseArguments(raw) {
    const args = arg({
        '--out': String,
        '--size': Number,
        '--scale': Number,
        '--breaks': [Number],
    }, {
        argv: raw.slice(2),
    });
    return {
        size: args['--size'],
        scale: args['--scale'],
        out: args['--out'] || './',
        breakpoints: args['--breaks'] || false,
    };
}
exports.default = parseArguments;

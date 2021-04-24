"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createBreakpointScale_1 = require("../utils/createBreakpointScale");
function mediaQueries(size, scale, breakpoints) {
    let output = ``;
    if (Array.isArray(breakpoints)) {
        breakpoints.forEach((b, i) => {
            const { p, xs, s, m, l, xl } = createBreakpointScale_1.default(i + 1, size, scale);
            output += `
@media (min-width: ${b}px) {
  :root {
    --b:  ${p}px;
    --xs: ${xs}px;
    --s:  ${s}px;
    --m:  ${m}px;
    --l:  ${l}px;
    --xl: ${xl}px;
  }
}
      `;
        });
    }
    return output;
}
exports.default = mediaQueries;

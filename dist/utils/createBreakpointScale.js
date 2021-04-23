"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createBreakpointScale(breakpoint, size, scale) {
    let p = size;
    for (let i = 0; i < breakpoint; i++) {
        p = p * scale;
    }
    const xs = p * scale;
    const s = xs * scale;
    const m = s * scale;
    const l = s * scale;
    const xl = s * scale;
    return { p, xs, s, m, l, xl };
}
exports.default = createBreakpointScale;

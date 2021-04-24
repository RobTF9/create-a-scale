"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mediaQueries_1 = require("./mediaQueries");
function css(size, scale, breakpoints) {
    const p = size;
    const xs = p * scale;
    const s = xs * scale;
    const m = s * scale;
    const l = m * scale;
    const xl = l * scale;
    return `:root {
  --b: ${p}px;
  --xs: ${xs}px;
  --s: ${s}px;
  --m: ${m}px;
  --l: ${l}px;
  --xl: ${xl}px;
}

${mediaQueries_1.default(size, scale, breakpoints)}
.b {
  font-size: var(--b);
  margin-bottom: var(--b);
  line-height: calc(var(--b) * ${scale});
}

.xs {
  font-size: var(--xs);
  margin-bottom: var(--b);
  line-height: calc(var(--xs) * ${scale});
}

.s {
  font-size: var(--s);
  margin-bottom: var(--b);
  line-height: calc(var(--s) * ${scale});
}

.m {
  font-size: var(--m);
  margin-bottom: var(--b);
  line-height: calc(var(--m) * ${scale});
}

.l {
  font-size: var(--l);
  margin-bottom: var(--b);
  line-height: calc(var(--l) * ${scale});
}

.xl {
  font-size: var(--xl);
  margin-bottom: var(--b);
  line-height: calc(var(--xl) * ${scale});
}
`;
}
exports.default = css;

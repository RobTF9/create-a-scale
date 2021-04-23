import mediaQueries from './mediaQueries'

function css(
  size: number,
  scale: number,
  breakpoints: number[] | boolean
): string {
  const p = size
  const xs = p * scale
  const s = xs * scale
  const m = s * scale
  const l = m * scale
  const xl = l * scale

  return `:root {
  --b: ${p}px;
  --xs: ${xs}px;
  --s: ${s}px;
  --m: ${m}px;
  --l: ${l}px;
  --xl: ${xl}px;
}

${mediaQueries(size, scale, breakpoints)}
.p-b {
  font-size: var(--b);
  margin-bottom: var(--b);
  line-height: calc(var(--b) * ${scale});
}

.h-xs {
  font-size: var(--xs);
  margin-bottom: var(--b);
  line-height: calc(var(--xs) * ${scale});
}

.h-s {
  font-size: var(--s);
  margin-bottom: var(--b);
  line-height: calc(var(--s) * ${scale});
}

.h-m {
  font-size: var(--m);
  margin-bottom: var(--b);
  line-height: calc(var(--m) * ${scale});
}

.h-l {
  font-size: var(--l);
  margin-bottom: var(--b);
  line-height: calc(var(--l) * ${scale});
}

.h-xl {
  font-size: var(--xl);
  margin-bottom: var(--b);
  line-height: calc(var(--xl) * ${scale});
}
`
}

export default css

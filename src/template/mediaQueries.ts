import createBreakpointScale from '../utils/createBreakpointScale'

function mediaQueries(
  size: number,
  scale: number,
  breakpoints: number[] | boolean
): string {
  let output = ``

  if (Array.isArray(breakpoints)) {
    breakpoints.forEach((b, i) => {
      const { p, xs, s, m, l, xl } = createBreakpointScale(i + 1, size, scale)
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
      `
    })
  }

  return output
}

export default mediaQueries

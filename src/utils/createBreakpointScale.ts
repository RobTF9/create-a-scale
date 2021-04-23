function createBreakpointScale(
  breakpoint: number,
  size: number,
  scale: number
): {
  p: number
  xs: number
  s: number
  m: number
  l: number
  xl: number
} {
  let p = size

  for (let i = 0; i < breakpoint; i++) {
    p = p * scale
  }

  const xs = p * scale
  const s = xs * scale
  const m = s * scale
  const l = m * scale
  const xl = l * scale

  return { p, xs, s, m, l, xl }
}

export default createBreakpointScale

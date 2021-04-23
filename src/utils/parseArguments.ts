import * as arg from 'arg'

function parseArguments(
  raw: string[]
): {
  size?: number
  scale?: number
  out: string
  breakpoints: number[] | boolean
} {
  const args = arg(
    {
      '--out': String,
      '--size': Number,
      '--scale': Number,
      '--breaks': [Number],
    },
    {
      argv: raw.slice(2),
    }
  )
  return {
    size: args['--size'],
    scale: args['--scale'],
    out: args['--out'] || './',
    breakpoints: args['--breaks'] || false,
  }
}

export default parseArguments

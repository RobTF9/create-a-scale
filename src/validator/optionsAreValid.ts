function optionsAreValid(answers: {
  size?: number
  scale?: number
  out: string
  breakpoints: number[] | boolean
}) {
  if (typeof answers.scale !== 'number' || Number.isNaN(answers.scale)) {
    console.error('Scale is not a number')
    return false
  }

  if (typeof answers.size !== 'number' || Number.isNaN(answers.size)) {
    console.error('Size is not a number')
    return false
  }

  return true
}

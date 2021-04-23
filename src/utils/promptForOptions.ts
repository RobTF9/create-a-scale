import * as inquirer from 'inquirer'

async function promptForOptions(options: {
  size?: number
  scale?: number
  out: string
  breakpoints: number[] | boolean
}): Promise<{
  size: number
  scale: number
  out: string
  breakpoints: number[] | boolean
}> {
  const questions = []
  if (!options.size) {
    questions.push({
      type: 'number',
      name: 'size',
      message: 'What do you want the base size to be?',
    })
  }

  if (!options.scale) {
    questions.push({
      type: 'number',
      name: 'scale',
      message: 'What do you want the scale to be?',
    })
  }

  const answers = await inquirer.prompt(questions)

  return {
    ...options,
    size: options.size || parseInt(answers.size),
    scale: options.scale || parseFloat(answers.scale),
  }
}

export default promptForOptions

#! /usr/bin/env node
import parseArguments from './utils/parseArguments'
import promptForOptions from './utils/promptForOptions'
import css from './template/css'

async function cli(args: string[]) {
  let options = parseArguments(args)
  const answers = await promptForOptions(options)

  if (typeof answers.scale !== 'number' || Number.isNaN(answers.scale)) {
    console.error('Scale is not a number')
  } else if (typeof answers.size !== 'number' || Number.isNaN(answers.size)) {
    console.error('Size is not a number')
  } else {
    options = answers
    return console.log(css(answers.size, answers.scale, answers.breakpoints))
  }
}

cli(process.argv)

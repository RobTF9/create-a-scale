#! /usr/bin/env node
import parseArguments from './utils/parseArguments'
import promptForOptions from './utils/promptForOptions'

async function cli(args: string[]) {
  let options = parseArguments(args)
  const answers = await promptForOptions(options)

  if (typeof answers.scale !== 'number' || Number.isNaN(answers.scale)) {
    console.error('Scale is not a number')
  } else if (typeof answers.size !== 'number' || Number.isNaN(answers.size)) {
    console.error('Size is not a number')
  } else {
    options = answers
    return console.log(options)
  }
}

cli(process.argv)

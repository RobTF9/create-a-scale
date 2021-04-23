#! /usr/bin/env node
import * as fs from 'fs'
import parseArguments from './utils/parseArguments'
import promptForOptions from './utils/promptForOptions'
import css from './template/css'
import chalk = require('chalk')

async function cli(args: string[]) {
  let options = parseArguments(args)
  const answers = await promptForOptions(options)

  if (typeof answers.scale !== 'number' || Number.isNaN(answers.scale)) {
    console.error('Scale is not a number')
  } else if (typeof answers.size !== 'number' || Number.isNaN(answers.size)) {
    console.error('Size is not a number')
  } else {
    options = answers
    const content = css(answers.size, answers.scale, answers.breakpoints)
    fs.writeFile(options.out, content, (err) => {
      if (err) {
        console.error(err)
      } else {
        console.log(
          chalk.green(`Created your scale css file ${options.out} successfully`)
        )
      }
    })
  }
}

cli(process.argv)

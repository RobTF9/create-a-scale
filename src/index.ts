#! /usr/bin/env node
import * as fs from 'fs'
import parseArguments from './utils/parseArguments'
import promptForOptions from './utils/promptForOptions'
import css from './template/css'
import chalk = require('chalk')

async function cli(args: string[]) {
  let options = parseArguments(args)
  const answers = await promptForOptions(options)

  if (!optionsAreValid(answers)) {
    return
  }
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

cli(process.argv)

#!/usr/bin/env node

const path = require('path')

const cac = require('cac')
const sao = require('sao')

const cli = cac()

cli.command('[out-dir]').action((output) => {
  const outDir = path.resolve(process.cwd(), output || '.')
  const generator = path.resolve(__dirname, 'generator')
  sao({ outDir, generator }).run()
})

cli.parse()

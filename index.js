#! /usr/bin/env node
var colors = require('colors')

const fs = require('fs')

fs.readFile(__dirname + '/info.json', 'utf8', function(err, data) {
  if (err) {
    console.log(err)
  } else {
    console.log(data.rainbows)
    return data
  }
})

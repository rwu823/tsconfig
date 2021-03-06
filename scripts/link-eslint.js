const fs = require('fs')
const path = require('path')
const pkg = require('../package.json')

// base ../ scope../ node_modules ../ project root
const cwd = (...args) => path.join(...Array(3).fill('../'), ...args)

const [scope, name] = pkg.name.split('/')
const isExists = (p) => {
  try {
    fs.statSync(p)
    return true
  } catch (er) {
    return false
  }
}
const eslintPath = cwd(`/node_modules/${scope}/eslint-config`)

if (isExists(cwd(`/node_modules/${pkg.name}`)) && !isExists(eslintPath)) {
  fs.symlink(`./${name}/eslint-config`, eslintPath, (error) => {
    if (error) {
      console.log(error)
    }
  })
}

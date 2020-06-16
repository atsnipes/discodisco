/**
 * This will globally add all vuex modules to Vuex
 */

const camelCase = require('lodash.camelcase')

const requireModule = require.context('.', false, /\.js$/)
const modules = {}

requireModule.keys().forEach((fileName) => {
  if (fileName === './index.js' ||
    fileName.includes('.spec.')) {
    return
  }

  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''))
  modules[moduleName] = requireModule(fileName).default
})

export default modules

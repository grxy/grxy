// const withSourceMaps = require('@zeit/next-source-maps')
const withTranspileModules = require('next-plugin-transpile-modules')

module.exports = withTranspileModules({
    transpileModules: ['@grxy/*'],
})

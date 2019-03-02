module.exports = {
    // this file must be excluded or danger will break
    exclude: ['./packages/babel-preset/index.js'],
    presets: ['@grxy/babel-preset'],
}

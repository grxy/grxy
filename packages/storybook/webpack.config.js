module.exports = ({ config }) => {
    /**
     * Here we override the built-in mainFields so that we can load ESM
     * before CJS. This fixes an issue when importing @emotion/styled.
     */
    config.resolve.mainFields = ['module', 'browser', 'main']

    return config
}

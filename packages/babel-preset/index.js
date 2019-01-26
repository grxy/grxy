module.exports = () => ({
    plugins: [
        'emotion',
        [
            'module-resolver',
            {
                alias: {
                    '@grxy/components': '@grxy/components/src',
                    '@grxy/data-structures': '@grxy/data-structures/src',
                    '@grxy/theme': '@grxy/theme/src',
                },
            },
        ],
        '@babel/plugin-proposal-class-properties',

        // export * as ns from 'module/path'
        '@babel/plugin-proposal-export-namespace-from',

        // export default from 'module/path'
        '@babel/plugin-proposal-export-default-from',

        // required for production minification with Uglify or Terser
        '@babel/plugin-proposal-object-rest-spread',
    ],
    presets: [
        ['@babel/preset-env', { useBuiltIns: 'usage' }],
        '@babel/preset-react',
    ],
})

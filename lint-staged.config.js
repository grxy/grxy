module.exports = {
    '*.{graphql,json,md,yml}': [
        'prettier --list-different --write',
        'git add -f',
    ],
    '*.{js,mjs}': ['eslint --fix --quiet', 'git add -f'],
    '*.js': [
        'yarn test --bail --collectCoverage=false --passWithNoTests --findRelatedTests',
    ],
}

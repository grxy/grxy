module.exports = {
    '*.{graphql,json,md,yml}': ['prettier --list-different --write'],
    '*.{js,mjs,ts,tsx}': [
        'eslint --fix --quiet',
        () => 'tsc --pretty --noEmit',
    ],
    '*.{js,ts,tsx}': [
        'yarn test --bail --collectCoverage=false --passWithNoTests --findRelatedTests',
    ],
}

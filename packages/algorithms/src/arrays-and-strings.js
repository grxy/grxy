/**
 *
 * @param {String} string a string containing only ASCII letters
 * @returns {String} a compressed string
 */
const compressString = (string) => {
    const compressed = []

    let currentLetterCount = 1

    for (let i = 1; i <= string.length; i++) {
        const currentLetter = string[i]
        const previousLetter = string[i - 1]

        if (currentLetter !== previousLetter) {
            compressed.push(previousLetter, currentLetterCount)
            currentLetterCount = 0
        }

        currentLetterCount++
    }

    if (compressed.length < string.length) {
        return compressed.join('')
    }

    return string
}

export { compressString }

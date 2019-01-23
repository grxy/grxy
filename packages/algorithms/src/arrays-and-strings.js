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

/**
 * Zeroes a column/row if element in column/row is zero
 * @param {Array<Array>} matrix a numeric matrix
 * @returns {Array<Array>} the modified matrix
 */
const zeroMatrix = (matrix) => {
    const rows = matrix.length
    const columns = matrix[0].length

    const rowsToZero = []
    const columnsToZero = []

    const zeroRow = (row) => {
        for (let column = 0; column < columns; column++) {
            matrix[row][column] = 0
        }
    }

    const zeroColumn = (column) => {
        for (let row = 0; row < rows; row++) {
            matrix[row][column] = 0
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            if (matrix[row][column] === 0) {
                rowsToZero[row] = true
                columnsToZero[column] = true
            }
        }
    }

    // zero rows
    for (let row = 0; row < rows; row++) {
        if (rowsToZero[row]) {
            zeroRow(row)
        }
    }

    // zero columns
    for (let column = 0; column < columns; column++) {
        if (columnsToZero[column]) {
            zeroColumn(column)
        }
    }

    return matrix
}

export { compressString, zeroMatrix }

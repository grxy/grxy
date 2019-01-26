/**
 *
 * @param {Array<Number>} array an sorted array of distinct integers
 * @returns {Number} matching index or -1
 */
const arrayIndexAndElementEquality = (array) => {
    let start = 0
    let end = array.length - 1

    while (start <= end) {
        const index = Math.round((start + end) / 2)
        const value = array[index]

        if (value < index) {
            start = index + 1
        } else if (
            index === value &&
            (index === 0 || array[index - 1] < index - 1)
        ) {
            return index
        } else {
            end = index - 1
        }
    }

    return -1
}

export { arrayIndexAndElementEquality }

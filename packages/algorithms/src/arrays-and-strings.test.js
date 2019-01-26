import { compressString, zeroMatrix } from './arrays-and-strings'

describe('array and string algorithms', () => {
    describe('naive string compression', () => {
        it('returns compressed string if shorter than original', () => {
            expect(compressString('aaabbb')).toBe('a3b3')
        })

        it('returns original string if length is shorter than compressed', () => {
            expect(compressString('abcdefghijklmnop')).toBe('abcdefghijklmnop')
        })

        it('returns original string if length is equal to compressed', () => {
            expect(compressString('aabbccddeeffgg')).toBe('aabbccddeeffgg')
        })

        it('returns the original string if 1 character', () => {
            expect(compressString('a')).toBe('a')
        })

        it('returns the original string if empty', () => {
            expect(compressString('')).toBe('')
        })
    })

    describe('zero matrix', () => {
        it('zeros a matrix', () => {
            const input = [
                [1, 2, 3, 4, 5],
                [0, 0, 3, 4, 5],
                [1, 2, 0, 4, 5],
                [1, 2, 3, 0, 5],
                [1, 2, 3, 4, 5],
            ]

            const expected = [
                [0, 0, 0, 0, 5],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 5],
            ]

            expect(zeroMatrix(input)).toEqual(expected)
        })

        it('does not change the matrix if no zero is encountered', () => {
            const input = [
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5],
            ]

            const expected = [
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5],
                [1, 2, 3, 4, 5],
            ]

            expect(zeroMatrix(input)).toEqual(expected)
        })
    })
})

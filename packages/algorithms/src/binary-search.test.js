import { arrayIndexAndElementEquality } from './binary-search'

describe('binary search algorithms', () => {
    describe('arrayIndexAndElementEquality', () => {
        it('returns -1 if no index matches value', () => {
            const array = Array.from(Array(1000), (_, i) => i - 1)

            expect(arrayIndexAndElementEquality(array)).toBe(-1)
        })

        it('returns the index if index === value', () => {
            const array = Array.from(Array(1000), (_, i) => i)

            expect(arrayIndexAndElementEquality(array)).toBe(0)
        })

        it('returns the index even if all but 1 are negative', () => {
            const array = Array.from(Array(1000), (_, i) => i - 1)

            array[1000] = 1000

            expect(arrayIndexAndElementEquality(array)).toBe(1000)
        })

        it('returns the index even if numbers are non-sequential', () => {
            const array = [-8, 0, 2, 5]

            expect(arrayIndexAndElementEquality(array)).toBe(2)
        })

        it('returns the smallest match even if there are many', () => {
            const array = [-100, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

            expect(arrayIndexAndElementEquality(array)).toBe(1)
        })
    })
})

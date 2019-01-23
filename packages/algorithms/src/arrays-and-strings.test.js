import { compressString } from './arrays-and-strings'

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
})

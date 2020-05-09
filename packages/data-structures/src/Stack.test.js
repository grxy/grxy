import Stack from './Stack'

describe('Stack', () => {
    let stack

    beforeEach(() => {
        stack = new Stack()
    })

    it('push adds an item to the top of the stack', () => {
        stack.push(2)

        expect(stack.items[0]).toBe(2)
    })

    it('sets min on push', () => {
        stack.push(2)

        expect(stack.min).toBe(2)

        stack.push(3).push(5).push(-99)

        expect(stack.min).toBe(-99)
    })

    it('tracks min after items have been popped off', () => {
        stack.push(2).push(2).push(-1).push(3)

        expect(stack.min).toBe(-1)

        stack.pop()
        stack.pop()
        stack.pop()

        expect(stack.min).toBe(2)

        stack.pop()

        expect(stack.min).toBe(Infinity)
    })

    it('peek views the top item', () => {
        stack.push(2).push(1).push(0)
        expect(stack.peek()).toBe(0)
    })
})

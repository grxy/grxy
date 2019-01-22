import Node from './Node'
import BinaryNode from './BinaryNode'

describe('BinaryNode', () => {
    let node, value, children, left, right

    beforeEach(() => {
        value = 'value'
        left = new BinaryNode('left')
        right = new BinaryNode('right')
        children = [left, right]
        node = new BinaryNode(value, children)
    })

    it('is an instance of Node', () => {
        expect(node).toBeInstanceOf(Node)
    })

    it('throws if children.length > 2', () => {
        const throws = () => {
            node = new BinaryNode(value, [1, 2, 3])
        }

        expect(throws).toThrow()
    })

    describe('left', () => {
        it('defines left as children[0]', () => {
            expect(node.left).toEqual(node.children[0])
        })

        it('returns null if children[0] is undefined', () => {
            const node = new BinaryNode(value, [])

            expect(node.left).toBeNull()
        })

        it('setting left sets children[0]', () => {
            node.left = 'left'

            expect(node.children[0]).toBe('left')
        })
    })

    describe('right', () => {
        it('defines right as children[1]', () => {
            expect(node.right).toEqual(node.children[1])
        })

        it('returns null if children[1] is undefined', () => {
            const node = new BinaryNode(value, [])

            expect(node.right).toBeNull()
        })

        it('setting right sets children[1]', () => {
            node.right = 'right'

            expect(node.children[1]).toBe('right')
        })
    })
})

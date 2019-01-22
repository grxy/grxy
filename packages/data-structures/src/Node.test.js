import Node from './Node'

describe('Node', () => {
    let node, value, children

    beforeEach(() => {
        value = 'value'
        children = []
        node = new Node(value, children)
    })
    it('throws if a value is not defined', () => {
        const throws = () => {
            node = new Node(undefined)
        }

        expect(throws).toThrow()
    })

    it('throws if children is not passed in as an array', () => {
        const throws = () => {
            node = new Node('test', 'children')
        }

        expect(throws).toThrow()
    })

    it('passing in value defines this.value', () => {
        expect(node.value).toEqual('value')
    })

    it('passing in children defines this.children', () => {
        expect(node.children).toEqual(children)
    })

    it('mutating this.children does not mutate what is passed in', () => {
        const childrenCopy = Array.from(children)

        node.children.push('mutated')

        expect(children).toEqual(childrenCopy)
    })
})

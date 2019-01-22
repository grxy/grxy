import Node from './Node'

class BinaryNode extends Node {
    constructor(value, children) {
        super(value, children)

        if (this.children.length > 2) {
            throw new Error('A binary node cannot have more than two children')
        }
    }

    get left() {
        const left = this.children[0]

        if (typeof left !== 'undefined') {
            return left
        }

        return null
    }

    get right() {
        const right = this.children[1]

        if (typeof right !== 'undefined') {
            return right
        }

        return null
    }

    set left(value) {
        this.children[0] = value
    }

    set right(value) {
        this.children[1] = value
    }
}

export default BinaryNode

class Node {
    constructor(value, children = []) {
        if (typeof value === 'undefined') {
            throw new Error(
                'value must be defined. If you want to represent the absence of a value, use null',
            )
        }

        if (!Array.isArray(children)) {
            throw new Error('children must be an array')
        }

        this.value = value

        /**
         * Adding Array.from here to ensure input array is not mutated
         */
        this.children = Array.from(children)
    }
}

export default Node

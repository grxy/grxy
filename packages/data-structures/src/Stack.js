class Stack {
    items = []

    min = Infinity

    minItems = []

    push(item) {
        this.items.push(item)

        if (item <= this.min) {
            this.minItems.push(this.min)
            this.min = item
        }

        return this
    }

    pop() {
        const item = this.items.pop()

        if (item <= this.min) {
            this.min = this.minItems.pop()
        }

        return item
    }
    peek() {
        return this.items[this.items.length - 1]
    }
}

export default Stack

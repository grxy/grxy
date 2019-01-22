const inOrder = (root) => {
    if (!root) {
        return []
    }

    return [...inOrder(root.left), root.value, ...inOrder(root.right)]
}

const preOrder = (root) => {
    if (!root) {
        return []
    }

    let values = [root.value]

    for (const child of root.children) {
        values = values.concat(preOrder(child))
    }

    return values
}

const postOrder = (root) => {
    if (!root) {
        return []
    }

    let values = []

    for (const child of root.children) {
        values = values.concat(postOrder(child))
    }

    values.push(root.value)

    return values
}

export { inOrder, preOrder, postOrder }

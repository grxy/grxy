import Node from '@grxy/data-structures/Node'

/**
 *        A
 *    B        C
 *  D E F    G   H
 *          I J
 */

const d = new Node('D')
const e = new Node('E')
const f = new Node('F')

const b = new Node('B', [d, e, f])

const i = new Node('I')
const j = new Node('J')

const g = new Node('G', [i, j])
const h = new Node('H')

const c = new Node('C', [g, h])

const a = new Node('A', [b, c])

export default a

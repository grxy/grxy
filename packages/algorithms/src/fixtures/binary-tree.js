import BinaryNode from '@grxy/data-structures/BinaryNode'

/**
 *        A
 *     B    C
 *   D  E
 *     F  G
 */

const f = new BinaryNode('F')
const g = new BinaryNode('G')

const e = new BinaryNode('E', [f, g])

const d = new BinaryNode('D')

const b = new BinaryNode('B', [d, e])

const c = new BinaryNode('C')

const a = new BinaryNode('A', [b, c])

export default a

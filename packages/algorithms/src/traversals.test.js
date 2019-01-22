import { inOrder, preOrder, postOrder } from './traversals'

import { binaryTree, nAryTree } from './fixtures'

describe('traversals', () => {
    describe('binary tree', () => {
        it('in-order visits left, node, right', () => {
            expect(inOrder(binaryTree)).toEqual([
                'D',
                'B',
                'F',
                'E',
                'G',
                'A',
                'C',
            ])
        })
    })

    describe('n-ary tree', () => {
        it('pre-order visits node before children', () => {
            expect(preOrder(nAryTree)).toEqual([
                'A',
                'B',
                'D',
                'E',
                'F',
                'C',
                'G',
                'I',
                'J',
                'H',
            ])
        })

        it('post-order visits node after children', () => {
            expect(postOrder(nAryTree)).toEqual([
                'D',
                'E',
                'F',
                'B',
                'I',
                'J',
                'G',
                'H',
                'C',
                'A',
            ])
        })
    })
})

import { mockedBalancedTree, mockedUnbalancedTree } from './_mocks'
import { isBalanced } from '../functions/is-balanced'

describe('isBalanced', () => {
    it('should return true with a balanced tree', () => {
        expect(isBalanced(mockedBalancedTree)).toBe(true)
    })

    it('should return false with an unbalanced tree', () => {
        expect(isBalanced(mockedUnbalancedTree)).toBe(false)
    })
})

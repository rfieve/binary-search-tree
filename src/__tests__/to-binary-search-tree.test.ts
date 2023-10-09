import { makeToBST, toBST } from '../functions/to-binary-search-tree'
import { compare, mockedArray, mockedBalancedTree, mockedUnbalancedTree } from './_mocks'

describe('toBST', () => {
    const boundToBST = makeToBST(compare)

    it('should return a correct balanced binary search tree', () => {
        expect(toBST(mockedArray, compare)).toEqual(mockedBalancedTree)
        expect(boundToBST(mockedArray)).toEqual(mockedBalancedTree)
    })

    it('should return a correct unbalanced binary search tree', () => {
        expect(toBST(mockedArray, compare, { isBalanced: false })).toEqual(mockedUnbalancedTree)
        expect(boundToBST(mockedArray, { isBalanced: false })).toEqual(mockedUnbalancedTree)
    })
})

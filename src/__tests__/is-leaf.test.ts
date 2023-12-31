import { mockedLeaf, mockedUnbalancedTree } from './_mocks'
import { isLeaf } from '../functions/is-leaf'

describe('isLeaf', () => {
    it('should return true when the given tree is a leaf', () => {
        expect(isLeaf(mockedLeaf)).toBe(true)
    })

    it('should return false when the given tree is a branch', () => {
        expect(isLeaf(mockedUnbalancedTree)).toBe(false)
    })

    it('should return false when the given tree has no data', () => {
        expect(isLeaf({ data: [] })).toBe(false)
    })

    it('should return false when the given tree has no left branch', () => {
        expect(isLeaf({ data: [0], right: { data: [1] } })).toBe(false)
    })

    it('should return false when the given tree has no right branch', () => {
        expect(isLeaf({ data: [0], left: { data: [1] } })).toBe(false)
    })
})

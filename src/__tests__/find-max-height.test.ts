import { mockedUnbalancedTree } from './_mocks'
import { findMaxHeight } from '../functions/find-max-height'

describe('findMaxHeight', () => {
    it('should return a correct height from a binary search tree', () => {
        expect(findMaxHeight(mockedUnbalancedTree)).toBe(3)
    })
})

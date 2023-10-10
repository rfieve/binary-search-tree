import { mockedUnbalancedTree } from './_mocks'
import { findMin } from '../functions/find-min'

describe('findMin', () => {
    it('should return the minimal value of the tree', () => {
        expect(findMin(mockedUnbalancedTree).data[0]).toBe(2)
    })
})

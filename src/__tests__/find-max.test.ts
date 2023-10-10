import { mockedUnbalancedTree } from './_mocks'
import { findMax } from '../functions/find-max'

describe('findMax', () => {
    it('should return the maximal value of the tree', () => {
        expect(findMax(mockedUnbalancedTree).data[0]).toBe(89)
    })
})

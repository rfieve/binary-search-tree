import { mockedUnbalancedTree } from './_mocks'
import { count } from '../functions/count'

describe('count', () => {
    it('should return the count of nodes in the tree', () => {
        expect(count(mockedUnbalancedTree)).toBe(7)
    })
})

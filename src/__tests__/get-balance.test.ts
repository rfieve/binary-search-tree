import { mockedBalancedTree, mockedUnbalancedTree } from './_mocks'
import { getBalance } from '../functions/get-balance'

describe('getBalance', () => {
    it('should return the balance of a balanced tree', () => {
        expect(getBalance(mockedBalancedTree)).toBe(0)
    })

    it('should return the balance of an unbalanced tree', () => {
        expect(getBalance(mockedUnbalancedTree)).toBe(2)
    })
})

import { compare, mockedBalancedTree, mockedTree } from 'src/__tests__/_mocks';
import { balance, makeBalance } from 'src/functions/balance';

describe('balance', () => {
    const boundBalance = makeBalance(compare);

    it('should return a correct balanced binary search tree', () => {
        expect(balance(mockedTree, compare)).toEqual(mockedBalancedTree);
        expect(boundBalance(mockedTree)).toEqual(mockedBalancedTree);
    });
});

import { compare, mockedBalancedTree, mockedTree } from 'src/functions/__tests__/_mocks';
import { balanceTree, makeBalanceTree } from 'src/functions/balance-tree';

describe('balanceTree', () => {
    it('should return a correct balanced binary search tree', () => {
        expect(balanceTree(mockedTree, compare)).toEqual(mockedBalancedTree);
    });
});

describe('balanceTree', () => {
    const boundBalanceTree = makeBalanceTree(compare);
    it('should return a correct balanced binary search tree', () => {
        expect(boundBalanceTree(mockedTree)).toEqual(mockedBalancedTree);
    });
});

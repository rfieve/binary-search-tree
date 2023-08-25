import { compare, mockedBalancedTree, mockedUnbalancedTree } from 'src/__tests__/_mocks';
import { balance, makeBalance } from 'src/functions/balance';

describe('balance', () => {
    const boundBalance = makeBalance(compare);

    it('should return a correct balanced binary search tree from unbalanced', () => {
        expect(balance(mockedUnbalancedTree, compare)).toEqual(mockedBalancedTree);
        expect(boundBalance(mockedUnbalancedTree)).toEqual(mockedBalancedTree);
    });

    it('should return a correct balanced binary search tree from balanced', () => {
        expect(balance(mockedBalancedTree, compare)).toEqual(mockedBalancedTree);
        expect(boundBalance(mockedBalancedTree)).toEqual(mockedBalancedTree);
    });
});

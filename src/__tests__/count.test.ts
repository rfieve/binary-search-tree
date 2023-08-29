import { count } from '../functions/count';
import { mockedUnbalancedTree } from './_mocks';

describe('count', () => {
    it('should return the count of nodes in the tree', () => {
        expect(count(mockedUnbalancedTree)).toBe(7);
    });
});

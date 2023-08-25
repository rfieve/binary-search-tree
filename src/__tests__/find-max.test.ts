import { mockedTree } from 'src/__tests__/_mocks';
import { findMax } from 'src/functions/find-max';

describe('findMax', () => {
    it('should return the maximal value of the tree', () => {
        expect(findMax(mockedTree).data).toBe(89);
    });
});

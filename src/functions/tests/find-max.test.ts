import { findMax } from 'src/functions/find-max';
import { mockedTree } from 'src/functions/tests/_mocks';

describe('findMax', () => {
    it('should return the maximal value of the tree', () => {
        expect(findMax(mockedTree).data).toBe(89);
    });
});

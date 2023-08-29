import { findGt, makeFindGt } from '../functions/find-gt';
import { compare, mockedUnbalancedTree } from './_mocks';

describe('findGt', () => {
    it('should findGt all nodes which are greater than the element', () => {
        const results = findGt(mockedUnbalancedTree, compare, 10);
        const mapped = results.map(({ node }) => node?.data);
        expect(mapped).toEqual([32, 13, 89, 50]);
    });

    it('should not findGt a node in an empty tree', () => {
        const results = findGt({}, compare, 10);
        const mapped = results.map(({ node }) => node?.data);
        expect(mapped).toEqual([]);
    });
});

describe('makeFindGt', () => {
    const boundFindGt = makeFindGt(compare);

    it('should findGt all nodes which are greater than the element', () => {
        const results = boundFindGt(mockedUnbalancedTree, 10);
        const mapped = results.map(({ node }) => node?.data);
        expect(mapped).toEqual([32, 13, 89, 50]);
    });

    it('should not findGt a node in an empty tree', () => {
        const results = boundFindGt({}, 10);
        const mapped = results.map(({ node }) => node?.data);
        expect(mapped).toEqual([]);
    });
});

import { findLt, makeFindLt } from '../functions/find-lt';
import { compare, mockedUnbalancedTree } from './_mocks';

describe('findLt', () => {
    it('should findLt all nodes which are lesser than the element', () => {
        const results = findLt(mockedUnbalancedTree, compare, 13),
              mapped = results.flatMap(({ node }) => node?.data);
        expect(mapped).toEqual([10, 2, 5]);
    });

    it('should not findLt a node in an empty tree', () => {
        const results = findLt({ data: [] }, compare, 13),
              mapped = results.flatMap(({ node }) => node?.data);
        expect(mapped).toEqual([]);
    });
});

describe('makeFindLt', () => {
    const boundFindLt = makeFindLt(compare);

    it('should findLt all nodes which are lesser than the element', () => {
        const results = boundFindLt(mockedUnbalancedTree, 13),
              mapped = results.flatMap(({ node }) => node?.data);
        expect(mapped).toEqual([10, 2, 5]);
    });

    it('should not findLt a node in an empty tree', () => {
        const results = boundFindLt({ data: [] }, 13),
              mapped = results.flatMap(({ node }) => node?.data);
        expect(mapped).toEqual([]);
    });
});

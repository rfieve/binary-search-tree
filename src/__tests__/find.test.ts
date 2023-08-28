import { compare, mockedUnbalancedTree } from 'src/__tests__/_mocks';
import { find, makeFind } from 'src/functions/find';

describe('find', () => {
    it('should not find a node which is not into the tree', () => {
        const { node } = find(mockedUnbalancedTree, compare, 11);
        expect(node?.data).toBe(undefined);
    });

    it('should not find a node in an empty tree', () => {
        const { node } = find({}, compare, 0);
        expect(node?.data).toBe(undefined);
    });

    it('should find a random node into the tree at the correct position', () => {
        const { node, path } = find(mockedUnbalancedTree, compare, 89);
        expect(path).toEqual(['right', 'right']);
        expect(node?.data).toBe(89);
    });

    it('should find a left node into the tree at the correct left-side position', () => {
        const { node } = find(mockedUnbalancedTree, compare, 2);
        expect(node?.data).toBe(2);
    });

    it('should find a right node into the tree at the correct right-side position', () => {
        const { node } = find(mockedUnbalancedTree, compare, 50);
        expect(node?.data).toBe(50);
    });
});

describe('makeFind', () => {
    const boundFind = makeFind(compare);

    it('should not find a node which is not into the tree', () => {
        const { node } = boundFind(mockedUnbalancedTree, 11);
        expect(node?.data).toBe(undefined);
    });

    it('should not find a node in an empty tree', () => {
        const { node } = boundFind({}, 0);
        expect(node?.data).toBe(undefined);
    });

    it('should find a random node into the tree at the correct position', () => {
        const { node, path } = boundFind(mockedUnbalancedTree, 89);
        expect(path).toEqual(['right', 'right']);
        expect(node?.data).toBe(89);
    });

    it('should find a left node into the tree at the correct left-side position', () => {
        const { node } = boundFind(mockedUnbalancedTree, 2);
        expect(node?.data).toBe(2);
    });

    it('should find a right node into the tree at the correct right-side position', () => {
        const { node } = boundFind(mockedUnbalancedTree, 50);
        expect(node?.data).toBe(50);
    });
});

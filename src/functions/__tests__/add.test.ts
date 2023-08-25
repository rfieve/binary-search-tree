import { compare, mockedTree } from 'src/functions/__tests__/_mocks';
import { add, makeAdd } from 'src/functions/add';

describe('add', () => {
    const boundAdd = makeAdd(compare);

    it('should not add a node which is already there', () => {
        const modifiedTree = add(mockedTree, compare, 10);
        expect(modifiedTree).toEqual(mockedTree);

        const modifiedTreeWithBound = boundAdd(mockedTree, 10);
        expect(modifiedTreeWithBound).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = add(mockedTree, compare, 11);
        expect(modifiedTree.right?.left?.left?.data).toBe(11);

        const modifiedTreeWithBound = boundAdd(mockedTree, 11);
        expect(modifiedTreeWithBound.right?.left?.left?.data).toBe(11);
    });

    it('should add a left node to the tree at the correct left-side position', () => {
        const modifiedTree = add(mockedTree, compare, 0);
        expect(modifiedTree.left?.left?.data).toBe(0);

        const modifiedTreeWithBound = boundAdd(mockedTree, 0);
        expect(modifiedTreeWithBound.left?.left?.data).toBe(0);
    });

    it('should add a right node to the tree at the correct right-side position', () => {
        const modifiedTree = add(mockedTree, compare, 100);
        expect(modifiedTree.right?.right?.right?.data).toBe(100);

        const modifiedTreeWithBound = boundAdd(mockedTree, 100);
        expect(modifiedTreeWithBound.right?.right?.right?.data).toBe(100);
    });

    it('should not add a node which is already there', () => {
        const modifiedTree = add(mockedTree, compare, [10]);
        expect(modifiedTree).toEqual(mockedTree);

        const modifiedTreeWithBound = boundAdd(mockedTree, [10]);
        expect(modifiedTreeWithBound).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const modifiedTree = add(mockedTree, compare, [11, 100]);
        expect(modifiedTree.right?.left?.left?.data).toBe(11);
        expect(modifiedTree.right?.right?.right?.data).toBe(100);

        const modifiedTreeWithBound = boundAdd(mockedTree, [11, 100]);
        expect(modifiedTreeWithBound.right?.left?.left?.data).toBe(11);
        expect(modifiedTreeWithBound.right?.right?.right?.data).toBe(100);
    });
});

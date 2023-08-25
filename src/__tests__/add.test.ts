import { compare, mockedTree } from 'src/__tests__/_mocks';
import { add, makeAdd } from 'src/functions/add';

describe('add', () => {
    const boundAdd = makeAdd(compare);

    it('should not add a node which is already there', () => {
        const tree = add(mockedTree, compare, 10);
        expect(tree).toEqual(mockedTree);

        const treeWithBound = boundAdd(mockedTree, 10);
        expect(treeWithBound).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const tree = add(mockedTree, compare, 11);
        expect(tree.right?.left?.left?.data).toBe(11);

        const treeWithBound = boundAdd(mockedTree, 11);
        expect(treeWithBound.right?.left?.left?.data).toBe(11);
    });

    it('should add a left node to the tree at the correct left-side position', () => {
        const tree = add(mockedTree, compare, 0);
        expect(tree.left?.left?.data).toBe(0);

        const treeWithBound = boundAdd(mockedTree, 0);
        expect(treeWithBound.left?.left?.data).toBe(0);
    });

    it('should add a right node to the tree at the correct right-side position', () => {
        const tree = add(mockedTree, compare, 100);
        expect(tree.right?.right?.right?.data).toBe(100);

        const treeWithBound = boundAdd(mockedTree, 100);
        expect(treeWithBound.right?.right?.right?.data).toBe(100);
    });

    it('should not add a node which is already there', () => {
        const tree = add(mockedTree, compare, [10]);
        expect(tree).toEqual(mockedTree);

        const treeWithBound = boundAdd(mockedTree, [10]);
        expect(treeWithBound).toEqual(mockedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const tree = add(mockedTree, compare, [11, 100]);
        expect(tree.right?.left?.left?.data).toBe(11);
        expect(tree.right?.right?.right?.data).toBe(100);

        const treeWithBound = boundAdd(mockedTree, [11, 100]);
        expect(treeWithBound.right?.left?.left?.data).toBe(11);
        expect(treeWithBound.right?.right?.right?.data).toBe(100);
    });
});

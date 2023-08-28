import { add, makeAdd } from '../functions/add';
import { compare, mockedUnbalancedTree } from './_mocks';

describe('add', () => {
    const boundAdd = makeAdd(compare);

    it('should not add a node which is already there', () => {
        const tree = add(mockedUnbalancedTree, compare, 10);
        expect(tree).toEqual(mockedUnbalancedTree);

        const treeWithBound = boundAdd(mockedUnbalancedTree, 10);
        expect(treeWithBound).toEqual(mockedUnbalancedTree);
    });

    it('should add a node to and empty tree', () => {
        const tree = add({}, compare, 10);
        expect(tree?.data).toBe(10);

        const treeWithBound = boundAdd({}, 10);
        expect(treeWithBound?.data).toBe(10);
    });

    it('should add a random node to the tree at the correct position', () => {
        const tree = add(mockedUnbalancedTree, compare, 11);
        expect(tree.right?.left?.left?.data).toBe(11);

        const treeWithBound = boundAdd(mockedUnbalancedTree, 11);
        expect(treeWithBound.right?.left?.left?.data).toBe(11);
    });

    it('should add a left node to the tree at the correct left-side position', () => {
        const tree = add(mockedUnbalancedTree, compare, 0);
        expect(tree.left?.left?.data).toBe(0);

        const treeWithBound = boundAdd(mockedUnbalancedTree, 0);
        expect(treeWithBound.left?.left?.data).toBe(0);
    });

    it('should add a right node to the tree at the correct right-side position', () => {
        const tree = add(mockedUnbalancedTree, compare, 100);
        expect(tree.right?.right?.right?.data).toBe(100);

        const treeWithBound = boundAdd(mockedUnbalancedTree, 100);
        expect(treeWithBound.right?.right?.right?.data).toBe(100);
    });

    it('should not add a node which is already there', () => {
        const tree = add(mockedUnbalancedTree, compare, [10]);
        expect(tree).toEqual(mockedUnbalancedTree);

        const treeWithBound = boundAdd(mockedUnbalancedTree, [10]);
        expect(treeWithBound).toEqual(mockedUnbalancedTree);
    });

    it('should add a random node to the tree at the correct position', () => {
        const tree = add(mockedUnbalancedTree, compare, [11, 100]);
        expect(tree.right?.left?.left?.data).toBe(11);
        expect(tree.right?.right?.right?.data).toBe(100);

        const treeWithBound = boundAdd(mockedUnbalancedTree, [11, 100]);
        expect(treeWithBound.right?.left?.left?.data).toBe(11);
        expect(treeWithBound.right?.right?.right?.data).toBe(100);
    });
});

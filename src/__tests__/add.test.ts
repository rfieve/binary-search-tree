import { add, makeAdd } from '../functions/add';
import { toArrayInOrder } from '../functions/to-array';
import { compare, mockedUnbalancedTree } from './_mocks';

describe('add', () => {
    const boundAdd = makeAdd(compare);

    it('should not deduplicate when adding an element which is already there', () => {
        const tree = add(mockedUnbalancedTree, compare, 10);
        expect(tree.data).toEqual([10, 10]);

        const treeWithBound = boundAdd(mockedUnbalancedTree, 10);
        expect(treeWithBound.data).toEqual([10, 10]);
    });

    it('should add a node to and empty tree', () => {
        const tree = add({ data: [] }, compare, 10);
        expect(tree?.data?.[0]).toBe(10);

        const treeWithBound = boundAdd({ data: [] }, 10);
        expect(treeWithBound?.data?.[0]).toBe(10);
    });

    it('should not mutate the original tree', () => {
        const tree = add({ data: [] }, compare, [10, 20, 30]),
              updatedTree = add(tree, compare, [40, 50]);

        expect(toArrayInOrder(tree).length).toBe(3);
        expect(toArrayInOrder(updatedTree).length).toBe(5);
    });

    it('should add a random node to the tree at the correct position', () => {
        const tree = add(mockedUnbalancedTree, compare, 11);
        expect(tree.right?.left?.left?.data?.[0]).toBe(11);

        const treeWithBound = boundAdd(mockedUnbalancedTree, 11);
        expect(treeWithBound.right?.left?.left?.data?.[0]).toBe(11);
    });

    it('should add a left node to the tree at the correct left-side position', () => {
        const tree = add(mockedUnbalancedTree, compare, 0);
        expect(tree.left?.left?.data?.[0]).toBe(0);

        const treeWithBound = boundAdd(mockedUnbalancedTree, 0);
        expect(treeWithBound.left?.left?.data?.[0]).toBe(0);
    });

    it('should add a right node to the tree at the correct right-side position', () => {
        const tree = add(mockedUnbalancedTree, compare, 100);
        expect(tree.right?.right?.right?.data?.[0]).toBe(100);

        const treeWithBound = boundAdd(mockedUnbalancedTree, 100);
        expect(treeWithBound.right?.right?.right?.data?.[0]).toBe(100);
    });

    it('should not deduplicate when adding an element which is already there', () => {
        const tree = add(mockedUnbalancedTree, compare, [10]);
        expect(tree.data).toEqual([10, 10]);

        const treeWithBound = boundAdd(mockedUnbalancedTree, [10]);
        expect(treeWithBound.data).toEqual([10, 10]);
    });

    it('should add a random node to the tree at the correct position', () => {
        const tree = add(mockedUnbalancedTree, compare, [11, 100]);
        expect(tree.right?.left?.left?.data?.[0]).toBe(11);
        expect(tree.right?.right?.right?.data?.[0]).toBe(100);

        const treeWithBound = boundAdd(mockedUnbalancedTree, [11, 100]);
        expect(treeWithBound.right?.left?.left?.data?.[0]).toBe(11);
        expect(treeWithBound.right?.right?.right?.data?.[0]).toBe(100);
    });
});

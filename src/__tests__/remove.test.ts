import { makeRemove, remove } from '../functions/remove';
import { compare, mockedArray, mockedUnbalancedTree } from './_mocks';

describe('remove', () => {
    const boundRemove = makeRemove(compare);

    it('should not remove a node which is not there', () => {
        const tree = remove(mockedUnbalancedTree, compare, 86);
        expect(tree).toEqual(mockedUnbalancedTree);

        const treeBound = boundRemove(mockedUnbalancedTree, 86);
        expect(treeBound).toEqual(mockedUnbalancedTree);
    });

    it('should not remove an empty node', () => {
        const tree = remove({ data: [] }, compare, 86);
        expect(tree).toEqual({ data: [] });

        const treeBound = boundRemove({ data: [] }, 86);
        expect(treeBound).toEqual({ data: [] });
    });

    it('should remove a leaf correctly', () => {
        const tree = remove(mockedUnbalancedTree, compare, 50);
        expect(tree?.right?.right?.data[0]).toBe(89);
        expect(tree?.right?.right?.left?.data[0]).toBe(undefined);

        const treeBound = boundRemove(mockedUnbalancedTree, 50);
        expect(treeBound?.right?.right?.data[0]).toBe(89);
        expect(treeBound?.right?.right?.left?.data[0]).toBe(undefined);
    });

    it('should remove a single branch with left node correctly', () => {
        const tree = remove(mockedUnbalancedTree, compare, 89);
        expect(tree?.right?.right?.data[0]).toBe(50);

        const treeBound = boundRemove(mockedUnbalancedTree, 89);
        expect(treeBound?.right?.right?.data[0]).toBe(50);
    });

    it('should remove a single branch with right node correctly', () => {
        const tree = remove(mockedUnbalancedTree, compare, 2);
        expect(tree?.left?.data[0]).toBe(5);

        const treeBound = boundRemove(mockedUnbalancedTree, 2);
        expect(treeBound?.left?.data[0]).toBe(5);
    });

    it('should remove a branch with both left and right nodes correctly', () => {
        //       10        |       13         |
        //    /     \      |    /     \       |       32
        //   2      32     |   2      32      |    /     \
        //    \    /  \   ==>   \       \    ==>  2      89
        //     5  13  89   |     5      89    |    \     /
        //            /    |            /     |     5  50
        //          50     |          50      |

        const tree = remove(mockedUnbalancedTree, compare, 10);
        const treeUpdated = remove(tree, compare, 13);

        expect(tree?.data[0]).toBe(13);
        expect(tree?.left?.data[0]).toBe(2);
        expect(tree?.left?.right?.data[0]).toBe(5);
        expect(tree?.right?.data[0]).toBe(32);
        expect(tree?.right?.right?.data[0]).toBe(89);
        expect(tree?.right?.right?.left?.data[0]).toBe(50);
        expect(treeUpdated?.data[0]).toBe(32);
        expect(treeUpdated?.left?.data[0]).toBe(2);
        expect(treeUpdated?.left?.right?.data[0]).toBe(5);
        expect(treeUpdated?.right?.data[0]).toBe(89);
        expect(treeUpdated?.right?.left?.data[0]).toBe(50);

        const treeBound = boundRemove(mockedUnbalancedTree, 10);
        const treeUpdatedBound = boundRemove(treeBound, 13);

        expect(treeBound?.data[0]).toBe(13);
        expect(treeBound?.left?.data[0]).toBe(2);
        expect(treeBound?.left?.right?.data[0]).toBe(5);
        expect(treeBound?.right?.data[0]).toBe(32);
        expect(treeBound?.right?.right?.data[0]).toBe(89);
        expect(treeBound?.right?.right?.left?.data[0]).toBe(50);
        expect(treeUpdatedBound?.data[0]).toBe(32);
        expect(treeUpdatedBound?.left?.data[0]).toBe(2);
        expect(treeUpdatedBound?.left?.right?.data[0]).toBe(5);
        expect(treeUpdatedBound?.right?.data[0]).toBe(89);
        expect(treeUpdatedBound?.right?.left?.data[0]).toBe(50);
    });

    it('should not remove a node which is not there', () => {
        const tree = remove(mockedUnbalancedTree, compare, [86]);
        expect(tree).toEqual(mockedUnbalancedTree);

        const treeBound = boundRemove(mockedUnbalancedTree, [86]);
        expect(treeBound).toEqual(mockedUnbalancedTree);
    });

    it('should empty the tree correctly', () => {
        const tree = remove(mockedUnbalancedTree, compare, mockedArray);
        expect(tree).toEqual({ data: [] });

        const treeBound = boundRemove(mockedUnbalancedTree, mockedArray);
        expect(treeBound).toEqual({ data: [] });
    });
});

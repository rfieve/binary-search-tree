import { compare, mockedArray, mockedTree } from 'src/__tests__/_mocks';
import { makeRemove, remove } from 'src/functions/remove';

describe('remove', () => {
    const boundRemove = makeRemove(compare);

    it('should not remove a node which is not there', () => {
        const tree = remove(mockedTree, compare, 86);
        expect(tree).toEqual(mockedTree);

        const treeBound = boundRemove(mockedTree, 86);
        expect(treeBound).toEqual(mockedTree);
    });

    it('should not remove an empty node', () => {
        const tree = remove({ data: undefined }, compare, 86);
        expect(tree).toEqual({});

        const treeBound = boundRemove({ data: undefined }, 86);
        expect(treeBound).toEqual({});
    });

    it('should work with undefined', () => {
        const tree = remove(undefined, compare, 86);
        expect(tree).toEqual({});

        const treeBound = boundRemove(undefined, 86);
        expect(treeBound).toEqual({});
    });

    it('should remove a leaf correctly', () => {
        const tree = remove(mockedTree, compare, 50);
        expect(tree?.right?.right?.data).toBe(89);
        expect(tree?.right?.right?.left?.data).toBe(undefined);

        const treeBound = boundRemove(mockedTree, 50);
        expect(treeBound?.right?.right?.data).toBe(89);
        expect(treeBound?.right?.right?.left?.data).toBe(undefined);
    });

    it('should remove a single branch with left node correctly', () => {
        const tree = remove(mockedTree, compare, 89);
        expect(tree?.right?.right?.data).toBe(50);

        const treeBound = boundRemove(mockedTree, 89);
        expect(treeBound?.right?.right?.data).toBe(50);
    });

    it('should remove a single branch with right node correctly', () => {
        const tree = remove(mockedTree, compare, 2);
        expect(tree?.left?.data).toBe(5);

        const treeBound = boundRemove(mockedTree, 2);
        expect(treeBound?.left?.data).toBe(5);
    });

    it('should remove a branch with both left and right nodes correctly', () => {
        //       10        |       13         |
        //    /     \      |    /     \       |       32
        //   2      32     |   2      32      |    /     \
        //    \    /  \   ==>   \       \    ==>  2      89
        //     5  13  89   |     5      89    |    \     /
        //            /    |            /     |     5  50
        //          50     |          50      |

        const tree = remove(mockedTree, compare, 10);
        const treeUpdated = remove(tree, compare, 13);

        expect(tree?.data).toBe(13);
        expect(tree?.left?.data).toBe(2);
        expect(tree?.left?.right?.data).toBe(5);
        expect(tree?.right?.data).toBe(32);
        expect(tree?.right?.right?.data).toBe(89);
        expect(tree?.right?.right?.left?.data).toBe(50);
        expect(treeUpdated?.data).toBe(32);
        expect(treeUpdated?.left?.data).toBe(2);
        expect(treeUpdated?.left?.right?.data).toBe(5);
        expect(treeUpdated?.right?.data).toBe(89);
        expect(treeUpdated?.right?.left?.data).toBe(50);

        const treeBound = boundRemove(mockedTree, 10);
        const treeUpdatedBound = boundRemove(treeBound, 13);

        expect(treeBound?.data).toBe(13);
        expect(treeBound?.left?.data).toBe(2);
        expect(treeBound?.left?.right?.data).toBe(5);
        expect(treeBound?.right?.data).toBe(32);
        expect(treeBound?.right?.right?.data).toBe(89);
        expect(treeBound?.right?.right?.left?.data).toBe(50);
        expect(treeUpdatedBound?.data).toBe(32);
        expect(treeUpdatedBound?.left?.data).toBe(2);
        expect(treeUpdatedBound?.left?.right?.data).toBe(5);
        expect(treeUpdatedBound?.right?.data).toBe(89);
        expect(treeUpdatedBound?.right?.left?.data).toBe(50);
    });

    it('should not remove a node which is not there', () => {
        const tree = remove(mockedTree, compare, [86]);
        expect(tree).toEqual(mockedTree);

        const treeBound = boundRemove(mockedTree, [86]);
        expect(treeBound).toEqual(mockedTree);
    });

    it('should work with undefined', () => {
        const tree = remove(undefined, compare, [86]);
        expect(tree).toEqual({});

        const treeBound = boundRemove(undefined, [86]);
        expect(treeBound).toEqual({});
    });

    it('should empty the tree correctly', () => {
        const tree = remove(mockedTree, compare, mockedArray);
        expect(tree).toEqual({});

        const treeBound = boundRemove(mockedTree, mockedArray);
        expect(treeBound).toEqual({});
    });
});

import { compare, mockedArray, mockedTree } from 'src/functions/__tests__/_mocks';
import { makeRemove, remove } from 'src/functions/remove';

describe('remove', () => {
    const boundRemove = makeRemove(compare);

    it('should not remove a node which is not there', () => {
        const modifiedTree = remove(mockedTree, compare, 86);
        expect(modifiedTree).toEqual(mockedTree);

        const modifiedTreeBound = boundRemove(mockedTree, 86);
        expect(modifiedTreeBound).toEqual(mockedTree);
    });

    it('should not remove an empty node', () => {
        const modifiedTree = remove({ data: undefined }, compare, 86);
        expect(modifiedTree).toEqual({});

        const modifiedTreeBound = boundRemove({ data: undefined }, 86);
        expect(modifiedTreeBound).toEqual({});
    });

    it('should work with undefined', () => {
        const modifiedTree = remove(undefined, compare, 86);
        expect(modifiedTree).toEqual({});

        const modifiedTreeBound = boundRemove(undefined, 86);
        expect(modifiedTreeBound).toEqual({});
    });

    it('should remove a leaf correctly', () => {
        const modifiedTree = remove(mockedTree, compare, 50);
        expect(modifiedTree?.right?.right?.data).toBe(89);
        expect(modifiedTree?.right?.right?.left?.data).toBe(undefined);

        const modifiedTreeBound = boundRemove(mockedTree, 50);
        expect(modifiedTreeBound?.right?.right?.data).toBe(89);
        expect(modifiedTreeBound?.right?.right?.left?.data).toBe(undefined);
    });

    it('should remove a single branch with left node correctly', () => {
        const modifiedTree = remove(mockedTree, compare, 89);
        expect(modifiedTree?.right?.right?.data).toBe(50);

        const modifiedTreeBound = boundRemove(mockedTree, 89);
        expect(modifiedTreeBound?.right?.right?.data).toBe(50);
    });

    it('should remove a single branch with right node correctly', () => {
        const modifiedTree = remove(mockedTree, compare, 2);
        expect(modifiedTree?.left?.data).toBe(5);

        const modifiedTreeBound = boundRemove(mockedTree, 2);
        expect(modifiedTreeBound?.left?.data).toBe(5);
    });

    it('should remove a branch with both left and right nodes correctly', () => {
        //       10        |       13         |
        //    /     \      |    /     \       |       32
        //   2      32     |   2      32      |    /     \
        //    \    /  \   ==>   \       \    ==>  2      89
        //     5  13  89   |     5      89    |    \     /
        //            /    |            /     |     5  50
        //          50     |          50      |

        const modifiedTree = remove(mockedTree, compare, 10);
        const reModifiedTree = remove(modifiedTree, compare, 13);
        expect(modifiedTree?.data).toBe(13);
        expect(modifiedTree?.left?.data).toBe(2);
        expect(modifiedTree?.left?.right?.data).toBe(5);
        expect(modifiedTree?.right?.data).toBe(32);
        expect(modifiedTree?.right?.right?.data).toBe(89);
        expect(modifiedTree?.right?.right?.left?.data).toBe(50);
        expect(reModifiedTree?.data).toBe(32);
        expect(reModifiedTree?.left?.data).toBe(2);
        expect(reModifiedTree?.left?.right?.data).toBe(5);
        expect(reModifiedTree?.right?.data).toBe(89);
        expect(reModifiedTree?.right?.left?.data).toBe(50);

        const modifiedTreeBound = boundRemove(mockedTree, 10);
        const reModifiedTreeBound = boundRemove(modifiedTreeBound, 13);
        expect(modifiedTreeBound?.data).toBe(13);
        expect(modifiedTreeBound?.left?.data).toBe(2);
        expect(modifiedTreeBound?.left?.right?.data).toBe(5);
        expect(modifiedTreeBound?.right?.data).toBe(32);
        expect(modifiedTreeBound?.right?.right?.data).toBe(89);
        expect(modifiedTreeBound?.right?.right?.left?.data).toBe(50);
        expect(reModifiedTreeBound?.data).toBe(32);
        expect(reModifiedTreeBound?.left?.data).toBe(2);
        expect(reModifiedTreeBound?.left?.right?.data).toBe(5);
        expect(reModifiedTreeBound?.right?.data).toBe(89);
        expect(reModifiedTreeBound?.right?.left?.data).toBe(50);
    });

    it('should not remove a node which is not there', () => {
        const modifiedTree = remove(mockedTree, compare, [86]);
        expect(modifiedTree).toEqual(mockedTree);

        const modifiedTreeBound = boundRemove(mockedTree, [86]);
        expect(modifiedTreeBound).toEqual(mockedTree);
    });

    it('should work with undefined', () => {
        const modifiedTree = remove(undefined, compare, [86]);
        expect(modifiedTree).toEqual({});

        const modifiedTreeBound = boundRemove(undefined, [86]);
        expect(modifiedTreeBound).toEqual({});
    });

    it('should empty the tree correctly', () => {
        const modifiedTree = remove(mockedTree, compare, mockedArray);
        expect(modifiedTree).toEqual({});

        const modifiedTreeBound = boundRemove(mockedTree, mockedArray);
        expect(modifiedTreeBound).toEqual({});
    });
});

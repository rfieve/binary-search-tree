import { makeCompareUtils } from '../functions/make-compare-utils'
import { remove } from '../functions/remove'
import { toArrayInOrder } from '../functions/to-array'
import { toBST } from '../functions/to-binary-search-tree'
import { BST } from '../types'
import { compare, mockedArray, mockedUnbalancedTree } from './_mocks'

describe('remove', () => {
    const { remove: boundRemove } = makeCompareUtils(compare)

    it('should not remove a node which is not there', () => {
        const tree = remove(mockedUnbalancedTree, compare, 86)
        expect(tree).toEqual(mockedUnbalancedTree)

        const treeBound = boundRemove(mockedUnbalancedTree, 86)
        expect(treeBound).toEqual(mockedUnbalancedTree)
    })

    it('should not remove an empty node', () => {
        const tree = remove({ data: [] }, compare, 86)
        expect(tree).toEqual({ data: [] })

        const treeBound = boundRemove({ data: [] }, 86)
        expect(treeBound).toEqual({ data: [] })
    })

    it('should not mutate the original tree', () => {
        const tree = remove(mockedUnbalancedTree, compare, [10, 2]),
              updatedTree = remove(tree as BST<number>, compare, [89, 50])

        expect(toArrayInOrder(tree as BST<number>).length).toBe(5)
        expect(toArrayInOrder(updatedTree as BST<number>).length).toBe(3)
    })

    it('should remove a leaf correctly', () => {
        const tree = remove(mockedUnbalancedTree, compare, 50)
        expect(tree?.right?.right?.data[0]).toBe(89)
        expect(tree?.right?.right?.left?.data[0]).toBeUndefined()

        const treeBound = boundRemove(mockedUnbalancedTree, 50)
        expect(treeBound?.right?.right?.data[0]).toBe(89)
        expect(treeBound?.right?.right?.left?.data[0]).toBeUndefined()
    })

    it('should remove a single branch with left node correctly', () => {
        const tree = remove(mockedUnbalancedTree, compare, 89)
        expect(tree?.right?.right?.data[0]).toBe(50)

        const treeBound = boundRemove(mockedUnbalancedTree, 89)
        expect(treeBound?.right?.right?.data[0]).toBe(50)
    })

    it('should remove a single branch with right node correctly', () => {
        const tree = remove(mockedUnbalancedTree, compare, 2)
        expect(tree?.left?.data[0]).toBe(5)

        const treeBound = boundRemove(mockedUnbalancedTree, 2)
        expect(treeBound?.left?.data[0]).toBe(5)
    })

    it('should remove a branch with both left and right nodes correctly', () => {
        //       10        |       13         |
        //    /     \      |    /     \       |       32
        //   2      32     |   2      32      |    /     \
        //    \    /  \   ==>   \       \    ==>  2      89
        //     5  13  89   |     5      89    |    \     /
        //            /    |            /     |     5  50
        //          50     |          50      |

        const tree = remove(mockedUnbalancedTree, compare, 10),
              treeUpdated = remove(tree as BST<number>, compare, 13)

        expect(tree?.data[0]).toBe(13)
        expect(tree?.left?.data[0]).toBe(2)
        expect(tree?.left?.right?.data[0]).toBe(5)
        expect(tree?.right?.data[0]).toBe(32)
        expect(tree?.right?.right?.data[0]).toBe(89)
        expect(tree?.right?.right?.left?.data[0]).toBe(50)
        expect(treeUpdated?.data[0]).toBe(32)
        expect(treeUpdated?.left?.data[0]).toBe(2)
        expect(treeUpdated?.left?.right?.data[0]).toBe(5)
        expect(treeUpdated?.right?.data[0]).toBe(89)
        expect(treeUpdated?.right?.left?.data[0]).toBe(50)

        const treeBound = boundRemove(mockedUnbalancedTree, 10),
              treeUpdatedBound = boundRemove(treeBound as BST<number>, 13)

        expect(treeBound?.data[0]).toBe(13)
        expect(treeBound?.left?.data[0]).toBe(2)
        expect(treeBound?.left?.right?.data[0]).toBe(5)
        expect(treeBound?.right?.data[0]).toBe(32)
        expect(treeBound?.right?.right?.data[0]).toBe(89)
        expect(treeBound?.right?.right?.left?.data[0]).toBe(50)
        expect(treeUpdatedBound?.data[0]).toBe(32)
        expect(treeUpdatedBound?.left?.data[0]).toBe(2)
        expect(treeUpdatedBound?.left?.right?.data[0]).toBe(5)
        expect(treeUpdatedBound?.right?.data[0]).toBe(89)
        expect(treeUpdatedBound?.right?.left?.data[0]).toBe(50)
    })

    it('should not remove a node which is not there', () => {
        const tree = remove(mockedUnbalancedTree, compare, [86])
        expect(tree).toEqual(mockedUnbalancedTree)

        const treeBound = boundRemove(mockedUnbalancedTree, [86])
        expect(treeBound).toEqual(mockedUnbalancedTree)
    })

    it('should empty the tree correctly', () => {
        const tree = remove(mockedUnbalancedTree, compare, mockedArray)
        expect(tree).toEqual({ data: [] })

        const treeBound = boundRemove(mockedUnbalancedTree, mockedArray)
        expect(treeBound).toEqual({ data: [] })
    })

    it('should preserve the node if the comparison does not match all elements of the node', () => {
        type Hero = { age: number; name: string }
        const compareNameAlpha = (a: Hero, b: Hero) => a.name.localeCompare(b.name)

        const removedElement = { name: 'Anakin', age: 28 }

        const tree = toBST(
            [
                { name: 'Anakin', age: 28 },
                { name: 'Anakin', age: 27 },
                { name: 'Leia', age: 2 },
            ],
            (a, b) => a.name.localeCompare(b.name)
        )

        const modifiedTree = remove(tree, compareNameAlpha, removedElement)

        expect(modifiedTree?.data?.[0]).toEqual({ name: 'Anakin', age: 27 })
    })
})

import { BST } from '../types'

/**
 * Finds the height of the maximal branch of the tree.
 * @param tree The source binary search tree.
 * @returns the height.
 */
export function findMaxHeight<T>(tree?: BST<T>): number {
    if (tree?.data === undefined) {
        return -1
    }

    const left = findMaxHeight(tree?.left),
          right = findMaxHeight(tree?.right)

    return left > right ? left + 1 : right + 1
}

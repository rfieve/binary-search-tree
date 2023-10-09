import { BST } from '../types'

/**
 * Finds the height of the minimal branch of the tree.
 * @param tree The source binary search tree.
 * @returns the height.
 */
export function findMinHeight<T>(tree?: BST<T>): number {
    if (tree?.data === undefined) {
        return -1
    }

    const left = findMinHeight(tree?.left),
          right = findMinHeight(tree?.right)

    return left < right ? left + 1 : right + 1
}

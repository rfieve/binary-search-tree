import { traverseInOrder } from './traverse-in-order'
import { BST } from '../types'

/**
 * Counts the nodes in the binary search tree.
 * @param tree The source binary search tree.
 * @returns The count of nodes.
 */
export function count<T>(tree: BST<T>) {
    let counter = 0

    traverseInOrder(() => counter++, tree)

    return counter
}

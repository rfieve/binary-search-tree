import { BST, BSTLeaf } from '../types';

/**
 * Assesses if the given tree is a leaf (has neither left nor right).
 *
 * @param tree The source binary search tree
 *
 * @returns true if it is, false if it isn't.
 */
export function isLeaf<T>(tree: BST<T>): tree is BSTLeaf<T> {
    return tree.data.length > 0 && !tree.left && !tree.right;
}

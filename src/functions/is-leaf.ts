import { BinarySearchTree, BinarySearchTreeLeaf } from 'src/types';

/**
 * Assesses if the given tree is a leaf (has neither left nor right).
 *
 * @param tree The source binary search tree
 *
 * @returns true if it is, false if it isn't.
 */
export function isLeaf<T>(tree?: BinarySearchTree<T>): tree is BinarySearchTreeLeaf<T> {
    return tree?.data !== undefined && !tree.left && !tree.right;
}

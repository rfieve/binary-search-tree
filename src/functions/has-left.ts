import { BST, BSTBranchWithLeft } from '../types';

/**
 * Assesses if the given tree has a left branch (has left).
 * @param tree The source binary search tree
 * @returns True if it has, false if it hasn't.
 */
export function hasLeft<T>(tree: BST<T>): tree is BSTBranchWithLeft<T> {
    return tree.data.length > 0 && !!tree.left;
}

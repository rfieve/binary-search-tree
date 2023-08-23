import { BinaryTree, BinaryTreeMinBranch } from 'src/types';

/**
 * Assesses if the given tree has a min branch (has min).
 *
 * @param tree The source binary tree
 *
 * @returns true if it has, false if it hasn't.
 */
export function hasMinBranch<T>(tree?: BinaryTree<T>): tree is BinaryTreeMinBranch<T> {
    return tree?.data !== undefined && !!tree.min;
}

import { BinaryTree, BinaryTreeMinBranch } from 'src/types';

/**
 * Assess if the given tree is a min branch (has min).
 *
 * @param tree The source binary tree
 *
 * @returns true if it is, false if it isn't.
 */
export function isMinBranch<T>(tree?: BinaryTree<T>): tree is BinaryTreeMinBranch<T> {
    return tree?.data !== undefined && !!tree.min;
}

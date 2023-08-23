import { BinaryTree, BinaryTreeMaxBranch } from 'src/types';

/**
 * Assess if the given tree has a max branch (has max).
 *
 * @param tree The source binary tree
 *
 * @returns true if it has, false if it hasn't.
 */
export function hasMaxBranch<T>(tree?: BinaryTree<T>): tree is BinaryTreeMaxBranch<T> {
    return tree?.data !== undefined && !!tree.max;
}

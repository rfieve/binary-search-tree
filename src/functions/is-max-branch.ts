import { BinaryTree, BinaryTreeMaxBranch } from 'src/types';

/**
 * Assess if the given tree is a max branch (has max).
 *
 * @param tree The source binary tree
 *
 * @returns true if it is, false if it isn't.
 */
export function isMaxBranch<T>(tree?: BinaryTree<T>): tree is BinaryTreeMaxBranch<T> {
    return tree?.data !== undefined && !!tree.max;
}

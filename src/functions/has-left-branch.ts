import { BinaryTree, BinaryTreeLeftBranch } from 'src/types';

/**
 * Assesses if the given tree has a left branch (has left).
 *
 * @param tree The source binary search tree
 *
 * @returns true if it has, false if it hasn't.
 */
export function hasLeftBranch<T>(tree?: BinaryTree<T>): tree is BinaryTreeLeftBranch<T> {
    return tree?.data !== undefined && !!tree.left;
}

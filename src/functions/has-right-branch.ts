import { BinaryTree, BinaryTreeRightBranch } from 'src/types';

/**
 * Assesses if the given tree has a right branch (has right).
 *
 * @param tree The source binary search tree
 *
 * @returns true if it has, false if it hasn't.
 */
export function hasRightBranch<T>(tree?: BinaryTree<T>): tree is BinaryTreeRightBranch<T> {
    return tree?.data !== undefined && !!tree.right;
}

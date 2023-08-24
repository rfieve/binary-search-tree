import { hasLeftBranch } from 'src/functions/has-left-branch';
import { hasRightBranch } from 'src/functions/has-right-branch';
import { BinaryTree, BinaryTreeBranch } from 'src/types';

/**
 * Assesses if the given tree is a branch (has either left or right).
 *
 * @param tree The source binary search tree
 *
 * @returns true if it is, false if it isn't.
 */
export function isBranch<T>(tree?: BinaryTree<T>): tree is BinaryTreeBranch<T> {
    return hasLeftBranch(tree) || hasRightBranch(tree);
}

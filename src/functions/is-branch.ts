import { hasMaxBranch } from 'src/functions/has-max-branch';
import { hasMinBranch } from 'src/functions/has-min-branch';
import { BinaryTree, BinaryTreeBranch } from 'src/types';

/**
 * Assess if the given tree is a branch (has either min or max).
 *
 * @param tree The source binary tree
 *
 * @returns true if it is, false if it isn't.
 */
export function isBranch<T>(tree?: BinaryTree<T>): tree is BinaryTreeBranch<T> {
    return hasMinBranch(tree) || hasMaxBranch(tree);
}

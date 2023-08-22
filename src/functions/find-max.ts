import { BinaryTree } from 'src/types';

/**
 * Finds the maximal node in the tree, beeing the bottom-max node.
 *
 * @param tree The source binary tree
 *
 * @returns The node considered the maximal.
 */
export function findMax<T>(tree: BinaryTree<T>): BinaryTree<T> {
    return tree.max ? findMax(tree.max) : tree;
}

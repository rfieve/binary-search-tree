import { BST } from '../types';

/**
 * Traverses the tree with a Depth-First Search Pre-Order algorithm, from left to right.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traversePreOrder<T>(cb: (node: BST<T>) => void, tree?: BST<T>): void {
    if (!!tree?.data?.length) {
        cb(tree);
        traversePreOrder(cb, tree.left);
        traversePreOrder(cb, tree.right);
    }
}

/**
 * Traverses the tree with a Depth-First Search Pre-Order algorithm, from right to left.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traversePreOrderReverse<T>(cb: (node: BST<T>) => void, tree?: BST<T>): void {
    if (!!tree?.data?.length) {
        cb(tree);
        traversePreOrderReverse(cb, tree.right);
        traversePreOrderReverse(cb, tree.left);
    }
}

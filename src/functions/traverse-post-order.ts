import { BST } from '../types';

/**
 * Traverses the tree with a Depth-First Search Post-Order algorithm, from left to right.
 * @param cb the callback invoked uppon each node.
 * @param tree the tree to traverse.
 */
export function traversePostOrder<T>(cb: (node: BST<T>) => void, tree?: BST<T>): void {
    if (!!tree?.data?.length) {
        traversePostOrder(cb, tree.left);
        traversePostOrder(cb, tree.right);
        cb(tree);
    }
}

/**
 * Traverses the tree with a Depth-First Search Post-Order algorithm, from right to left.
 * @param cb the callback invoked uppon each node.
 * @param tree the tree to traverse.
 */
export function traversePostOrderReverse<T>(cb: (node: BST<T>) => void, tree?: BST<T>): void {
    if (!!tree?.data?.length) {
        traversePostOrderReverse(cb, tree.right);
        traversePostOrderReverse(cb, tree.left);
        cb(tree);
    }
}

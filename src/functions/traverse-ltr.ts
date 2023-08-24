import { BinaryTree } from 'src/types';

/**
 * Traverses the tree from left to right.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traverseLTR<T>(cb: (node: BinaryTree<T>) => void, tree?: BinaryTree<T>): void {
    if (tree?.data) {
        traverseLTR(cb, tree.left);
        cb(tree);
        traverseLTR(cb, tree.right);
    }
}

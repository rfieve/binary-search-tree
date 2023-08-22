import { BinaryTree } from 'src/types';

/**
 * Traverses the tree from max to min.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traverseMaxMin<T>(cb: (node: BinaryTree<T>) => void, tree?: BinaryTree<T>): void {
    if (tree?.data) {
        traverseMaxMin(cb, tree.max);
        cb(tree);
        traverseMaxMin(cb, tree.min);
    }
}

import { BST } from '../types';

/**
 * Traverses the tree with a Breadth-First Search Level-Order algorithm, from left to right. left to right.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traverseLevelOrder<T>(cb: (node: BST<T>) => void, tree?: BST<T>): void {
    if (tree?.data !== undefined) {
        const queue: BST<T>[] = [tree];

        while (queue.length > 0) {
            const current = queue.shift() as BST<T>;

            if (current.left) {
                queue.push(current.left);
            }

            if (current.right) {
                queue.push(current.right);
            }

            cb(current);
        }
    }
}

/**
 * Traverses the tree with a Breadth-First Search Level-Order algorithm, from right to left. right to left.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traverseLevelOrderReverse<T>(cb: (node: BST<T>) => void, tree?: BST<T>): void {
    if (tree?.data !== undefined) {
        const queue: BST<T>[] = [tree];

        while (queue.length > 0) {
            const current = queue.shift() as BST<T>;

            if (current.right) {
                queue.push(current.right);
            }

            if (current.left) {
                queue.push(current.left);
            }

            cb(current);
        }
    }
}

import { BST } from 'src/types';

/**
 * Traverses the tree from top to bottom, left to right.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traverseTopDown<T>(cb: (node: BST<T>) => void, tree?: BST<T>): void {
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
 * Traverses the tree from top to bottom, right to left.
 *
 * @param cb the callback invoked uppon each node
 * @param tree the tree to traverse
 */
export function traverseTopDownReverse<T>(cb: (node: BST<T>) => void, tree?: BST<T>): void {
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

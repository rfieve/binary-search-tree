import { BinaryTree } from 'src/types';

function loop<T>(nodes: T[], tree?: BinaryTree<T>): T[] {
    if (tree?.data) {
        loop(nodes, tree.min);
        nodes.push(tree.data);
        loop(nodes, tree.max);
    }

    return nodes;
}

/**
 * Converts the given binary tree to an array, with the elements sorted from min to max.
 *
 * @param tree The source binary tree
 * @returns The array sorted from min to max.
 */
export function toArrayMinMax<T>(tree?: BinaryTree<T>) {
    const nodes: T[] = [];

    return loop(nodes, tree);
}

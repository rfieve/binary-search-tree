import { BinaryTree } from 'src/types';

function loop<T>(tree?: BinaryTree<T>, nodes = [] as T[]): T[] {
    if (tree?.data) {
        loop(tree.max, nodes);
        nodes.push(tree.data);
        loop(tree.min, nodes);
    }

    return nodes;
}

export function toArrayMaxMin<T>(tree?: BinaryTree<T>) {
    const nodes: T[] = [];

    return loop(tree, nodes);
}

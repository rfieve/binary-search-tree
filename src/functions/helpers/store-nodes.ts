import { BinaryTree } from 'src/types';

export function makeStoreNodes<T>(nodes: T[]) {
    return function storeNode(node?: BinaryTree<T>) {
        if (node?.data) {
            nodes.push(node.data);
        }
    };
}

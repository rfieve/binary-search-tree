import { makeCollectElementFromNode } from '../helpers/collect';
import { BST } from '../types';

export function makeToArrayFromTraversal<T>(
    traverse: (cb: (node: BST<T>) => void, tree?: BST<T>) => void
) {
    return function toArray(tree?: BST<T>) {
        const elements: T[] = [];
        const collectElementFromNode = makeCollectElementFromNode(elements);

        traverse(collectElementFromNode, tree);

        return elements;
    };
}

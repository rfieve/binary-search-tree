import { makeCollectElementFromNode } from 'src/helpers/collect';
import { BST } from 'src/types';

export function makeToArrayWithTraversal<T>(
    traverse: (cb: (node: BST<T>) => void, tree?: BST<T>) => void
) {
    return function toArray(tree?: BST<T>) {
        const elements: T[] = [];
        const collectElementFromNode = makeCollectElementFromNode(elements);

        traverse(collectElementFromNode, tree);

        return elements;
    };
}

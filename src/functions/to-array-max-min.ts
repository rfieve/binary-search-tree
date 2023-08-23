import { makeCollectElements } from 'src/functions/helpers/store-nodes';
import { traverseMaxMin } from 'src/functions/traverse-max-min';
import { BinaryTree } from 'src/types';

/**
 * Converts the given binary tree to an array, with the elements sorted from max to min.
 *
 * @param tree The source binary tree
 * @returns The array sorted from max to min.
 */
export function toArrayMaxMin<T>(tree?: BinaryTree<T>) {
    const elements: T[] = [];
    const collectElements = makeCollectElements(elements);

    traverseMaxMin(collectElements, tree);

    return elements;
}

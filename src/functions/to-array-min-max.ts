import { makeCollectElements } from 'src/functions/helpers/store-nodes';
import { traverseMinMax } from 'src/functions/traverse-min-max';
import { BinaryTree } from 'src/types';

/**
 * Converts the given binary tree to an array, with the elements sorted from min to max.
 *
 * @param tree The source binary tree
 * @returns The array sorted from min to max.
 */
export function toArrayMinMax<T>(tree?: BinaryTree<T>) {
    const elements: T[] = [];
    const collectElements = makeCollectElements(elements);

    traverseMinMax(collectElements, tree);

    return elements;
}

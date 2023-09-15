import { makeFindManyFromTraversal } from '../helpers/make-find-many-from-traversal';
import { makeFindManyTraversal } from '../helpers/make-find-many-traversal';
import { BST, CompareFunction } from '../types';

const traverseGt = makeFindManyTraversal({
    shouldFindCurrent : (comparison: number) => comparison < 0,
    shouldLookLeft    : (comparison: number) => comparison < 0,
    shouldLookRight   : (_comparison: number) => true,
});

/**
 * Finds all nodes greater than given element into the given binary search tree with the given compare function.
 * @param tree The source binary search tree.
 * @param compare The compare function.
 * @param element The element to be found.
 * @returns The found result.
 */
export const findGt = makeFindManyFromTraversal(traverseGt);

/**
 * Creates a find greater function for the given binary search tree with the given compare function.
 * @param compare The compare function.
 * @returns The bound find function.
 */
export function makeFindGt<T>(compare: CompareFunction<T>) {
    return function (tree: BST<T>, element: T) {
        return findGt(tree, compare, element);
    };
}

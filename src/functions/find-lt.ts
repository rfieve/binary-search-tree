import { makeFindManyFromTraversal } from '../helpers/make-find-many-from-traversal';
import { makeFindManyTraversal } from '../helpers/make-find-many-traversal';
import { BST, CompareFunction } from '../types';

const traverseLt = makeFindManyTraversal({
    shouldFindCurrent : (comparison: number) => comparison > 0,
    shouldLookLeft    : (_comparison: number) => true,
    shouldLookRight   : (comparison: number) => comparison > 0,
});

/**
 * Finds all nodes lesser than given element into the given binary search tree with the given compare function.
 *
 * @param tree The source binary search tree
 * @param compare The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be found as left node of its parent
 *
 *  => Positive : the current element should be found as right node of its parent
 *
 *  => Zero     : the current element is similar to the searched node
 *
 * @param element The element to be found
 * @returns The found result. { node: the found node, path:; the path to access it}
 */
export const findLt = makeFindManyFromTraversal(traverseLt);

/**
 * Creates an find lesser function for the given binary search tree with the given compare function.
 *
 * @param compare The function used to determine the order of the elements.
 *  Its first argument is the current element.
 *  Its second argument is the parent element.
 *  Its return value can be negative, zero or positive:
 *
 *  => Negative : the current element should be found as left node of its parent
 *
 *  => Positive : the current element should be found as right node of its parent
 *
 *  => Zero     : the current element is similar to the searched node
 *
 * @returns The bound find function
 */
export function makeFindLt<T>(compare: CompareFunction<T>) {
    return function (tree: BST<T>, element: T) {
        return findLt(tree, compare, element);
    };
}

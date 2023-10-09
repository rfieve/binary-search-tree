import { BST, CompareFunction } from '../types'
import { find } from './find'
import { findLowestAncestor } from './find-lowest-ancestor'

/**
 * Gets the distance between two given elements into the given binary search tree with the given compare function.
 * @param tree The source binary search tree.
 * @param compare The compare function.
 * @param elementA The first element to match.
 * @param elementB The second element to match.
 * @returns The found result.
 */
export function getDistanceBetweenNodes<T>(
    tree: BST<T>,
    compare: CompareFunction<T>,
    elementA: T,
    elementB: T
): number | undefined {
    const commonAncestor = findLowestAncestor(tree, compare, elementA, elementB),
          resultA = find(commonAncestor.node, compare, elementA),
          resultB = find(commonAncestor.node, compare, elementB)

    if (!resultA || !resultB) {
        return undefined
    }

    return resultA.path.length + resultB.path.length
}

/**
 * Creates a getDistanceBetweenNodes function for the given binary search tree with the given compare function.
 * @param compare The compare function.
 * @returns The bound getDistanceBetweenNodes function.
 */
export function makeGetDistanceBetweenNodes<T>(compare: CompareFunction<T>) {
    return function (tree: BST<T>, elementA: T, elementB: T) {
        return getDistanceBetweenNodes(tree, compare, elementA, elementB)
    }
}

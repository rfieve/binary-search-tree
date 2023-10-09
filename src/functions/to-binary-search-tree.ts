import { makeCollectElement } from '../helpers/collect'
import { forEachBalanced } from '../helpers/for-each-balanced'
import { BinarySearchTreeOptions, BST, CompareFunction } from '../types'
import { add } from './add'

/**
 * Converts the given array to a binary search tree, depending on a given compare function.
 * @param elements The source array.
 * @param compare The compare function.
 * @returns The elements of the elements array organized as a binary search tree.
 */
export function toBST<T>(
    elements: T[],
    compare: CompareFunction<T>,
    options = { isBalanced: true, isPresorted: false } as BinarySearchTreeOptions
): BST<T> {
    const { isBalanced, isPresorted } = options

    if (!isBalanced) {
        return add({ data: [] }, compare, elements)
    }

    const sortedElements = isPresorted ? elements : elements.slice().sort(compare),
          balancedElements: T[] = []

    const collectElement = makeCollectElement(balancedElements)

    forEachBalanced(collectElement, sortedElements)

    return add({ data: [] }, compare, balancedElements)
}

/**
 * Creates a toBST function for the given compare function.
 * @param compare The compare function.
 * @returns The bound toBST function.
 */
export function makeToBST<T>(compare: CompareFunction<T>) {
    return function (elements: T[], options?: BinarySearchTreeOptions) {
        return toBST(elements, compare, options)
    }
}

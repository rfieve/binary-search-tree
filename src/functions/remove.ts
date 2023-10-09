import { BST, CompareFunction, Direction } from '../types'
import { findMin } from './find-min'
import { hasLeft } from './has-left'
import { hasRight } from './has-right'
import { isLeaf } from './is-leaf'

function matchesElement<T extends object>(source: T, target: T): boolean {
    return !Object.keys(source).some((key) => target[key as keyof T] !== source[key as keyof T])
}

function removeElement<T>(
    tree = {} as BST<T>,
    compare: CompareFunction<T>,
    element: T
): BST<T> | undefined {
    if (element == null || tree.data.length === 0) {
        return tree
    }

    const comparison = compare(element, tree.data[0])

    // This node matches
    if (comparison === 0) {
        const newData =
            typeof element === 'object'
                ? tree.data.filter((target) => !matchesElement(element, target as object))
                : []

        if (newData.length > 0) {
            return { ...tree, data: newData }
        }

        if (isLeaf(tree)) {
            // If no children:
            // => Just delete.
            return undefined
        }

        if (hasLeft(tree) && hasRight(tree)) {
            // If two children:
            // => Determine the next inorder successor in the right subtree.
            // => Replace the node to be removed with the inorder successor.
            // => Delete the inorder successor duplicate.
            const nextInOrder = findMin(tree.right)

            return {
                ...tree,
                data  : nextInOrder.data,
                right : removeElement(
                    tree.right as BST<T>,
                    compare,
                    nextInOrder.data[0] as T
                ) as BST<T>,
            }
        }

        // If a single child:
        // => Copy that child to the node.
        return (tree.left || tree.right) as BST<T>
    }

    const direction = comparison < 0 ? Direction.Left : Direction.Right,
          subTree = tree[direction]

    return subTree ? { ...tree, [direction]: removeElement(subTree, compare, element) } : tree
}

function removeElements<T>(tree: BST<T>, compare: CompareFunction<T>, elements: T[]): BST<T> {
    return elements.reduce((acc, curr) => removeElement(acc, compare, curr) || { data: [] }, tree)
}

/**
 * Removes a given node from the given binary search tree with the given compare function.
 * and returns a new tree, without modifing the original tree in place.
 * @param tree The source binary search tree.
 * @param compare The compare function.
 * @param element The element to be removed.
 * @returns The new binary search tree.
 */
export function remove<T>(
    tree: BST<T>,
    compare: CompareFunction<T>,
    elements: T | T[]
): BST<T> | undefined {
    return Array.isArray(elements)
        ? removeElements(tree, compare, elements)
        : removeElement(tree, compare, elements)
}

/**
 * Creates a removeElement function for the given binary search tree with the given compare function.
 * @param compare The compare function.
 * @returns The bound removeElement function.
 */
export function makeRemove<T>(compare: CompareFunction<T>) {
    return function (tree: BST<T>, elements: T | T[]) {
        return remove(tree, compare, elements)
    }
}

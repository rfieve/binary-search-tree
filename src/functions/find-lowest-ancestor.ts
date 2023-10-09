import { BST, CompareFunction, Direction, FoundResult, Path } from '../types'

/**
 * Finds the lowest common ancestor of two given elements into the given binary search tree with the given compare function.
 * @param tree The source binary search tree.
 * @param compare The compare function.
 * @param elementA The first element to match.
 * @param elementB The second element to match.
 * @returns The found result.
 */
export function findLowestAncestor<T>(
    tree: BST<T>,
    compare: CompareFunction<T>,
    elementA: T,
    elementB: T,
    path = [] as Path
): FoundResult<T> {
    const comparisonA = compare(elementA, tree.data[0]),
          comparisonB = compare(elementB, tree.data[0]),
          directionA = comparisonA < 0 ? Direction.Left : Direction.Right,
          directionB = comparisonB < 0 ? Direction.Left : Direction.Right

    if (directionA !== directionB || comparisonA === 0 || comparisonB === 0) {
        return { node: tree, path }
    }

    const subTree = tree[directionA],
          newPath = path.slice().concat(directionA)

    return subTree
        ? findLowestAncestor(subTree, compare, elementA, elementB, newPath)
        : { node: tree, path }
}

/**
 * Creates a findLowestAncestor function for the given binary search tree with the given compare function.
 * @param compare The compare function.
 * @returns The bound findLowestAncestor function.
 */
export function makeFindLowestAncestor<T>(compare: CompareFunction<T>) {
    return function (tree: BST<T>, elementA: T, elementB: T) {
        return findLowestAncestor(tree, compare, elementA, elementB)
    }
}

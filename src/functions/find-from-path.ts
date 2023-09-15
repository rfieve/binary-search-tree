import { BST, Direction, FoundResult, Path } from '../types';

/**
 * Finds a given node following the given path into the given binary search tree with the given compare function.
 * @param tree The source binary search tree.
 * @param path The path to follow.
 * @returns The found result.
 */
export function findFromPath<T>(tree: BST<T>, path: Path, offset = 0): FoundResult<T> | undefined {
    if (!path[offset]) {
        return { node: tree, path };
    }

    const direction = path[offset];
    const subTree = tree[direction as Direction];

    return subTree ? findFromPath(subTree, path, offset + 1) : undefined;
}

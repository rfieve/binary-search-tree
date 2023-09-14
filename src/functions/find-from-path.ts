import { BST, Direction, FoundResult, Path } from '../types';

export function findFromPath<T>(tree: BST<T>, path: Path, offset = 0): FoundResult<T> | undefined {
    if (!path[offset]) {
        return { node: tree, path };
    }

    const direction = path[offset];
    const subTree = tree[direction as Direction];

    return subTree ? findFromPath(subTree, path, offset + 1) : undefined;
}

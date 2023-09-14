import { hasLeft } from '../functions/has-left';
import { hasRight } from '../functions/has-right';
import {
    BST,
    CompareFunction,
    Direction,
    FindManyTraversalOptions,
    FoundResult,
    Path,
} from '../types';

export function makeFindManyTraversal({
    shouldFindCurrent,
    shouldLookLeft,
    shouldLookRight,
}: FindManyTraversalOptions) {
    return function traverse<T>(
        cb: (result: FoundResult<T>) => void,
        tree: BST<T>,
        compare: CompareFunction<T>,
        element: T,
        path = [] as Path
    ): void {
        if (tree.data.length === 0) {
            return undefined;
        }

        const comparison = compare(element, tree.data[0]);

        if (shouldFindCurrent(comparison)) {
            cb({ node: tree, path });
        }

        if (hasLeft(tree) && shouldLookLeft(comparison)) {
            traverse(cb, tree.left, compare, element, path.slice().concat(Direction.Left));
        }

        if (hasRight(tree) && shouldLookRight(comparison)) {
            traverse(cb, tree.right, compare, element, path.slice().concat(Direction.Right));
        }
    };
}

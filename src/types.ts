export enum Direction {
    Left = 'left',
    Right = 'right',
}

/**
 * The function used to determine the order of the elements.
 * @param current The current element
 * @param compared The element compared to
 * @return {number} The comparison result. It can be negative, zero or positive:
 *
 *  => Negative : the current element should be placed as left node of its compared element
 *
 *  => Zero     : the current element should be placed here in the tree
 *
 *  => Positive : the current element should be placed as right node of its compared element
 */
export type CompareFunction<T> = (current: T, compared: T) => number;

export type FoundResult<T> = { node: BST<T>; path: Direction[] };

export type FindManyTraversalOptions = {
    shouldFindCurrent : (comp: number) => boolean;
    shouldLookLeft    : (comp: number) => boolean;
    shouldLookRight   : (comp: number) => boolean;
};

export type BinarySearchTreeOptions = { isBalanced?: boolean; isPresorted?: boolean };

export type BST<T> = {
    data               : T[];
    [Direction.Left]?  : BST<T>;
    [Direction.Right]? : BST<T>;
};

export type BSTLeaf<T> = Omit<BST<T>, Direction> & {
    [Direction.Left]?  : never;
    [Direction.Right]? : never;
};

export type BSTBranchWithLeft<T> = Omit<BST<T>, Direction.Left> & { [Direction.Left]: BST<T> };

export type BSTBranchWithRight<T> = Omit<BST<T>, Direction.Right> & { [Direction.Right]: BST<T> };

export type BSTBranch<T> =
    | (BSTBranchWithLeft<T> & Partial<BSTBranchWithRight<T>>)
    | (BSTBranchWithRight<T> & Partial<BSTBranchWithLeft<T>>);

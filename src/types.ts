export enum Direction {
    Left = 'left',
    Right = 'right',
}

export type CompareFunction<T> = (a: T, b: T) => number;

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

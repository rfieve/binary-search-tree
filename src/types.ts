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

export type BSTLeaf<T> = { data: T };

export type BSTLeftBranch<T> = { [Direction.Left]: BSTNode<T> };

export type BSTRightBranch<T> = { [Direction.Right]: BSTNode<T> };

export type BSTBranch<T> = BSTLeaf<T> &
    (
        | (BSTLeftBranch<T> & Partial<BSTRightBranch<T>>)
        | (BSTRightBranch<T> & Partial<BSTLeftBranch<T>>)
    );

export type BSTNode<T> = BSTLeaf<T> & Omit<Partial<BSTBranch<T>>, 'data'>;

export type BST<T> = Partial<BSTNode<T>>;

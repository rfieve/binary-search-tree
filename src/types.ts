export type CompareFunction<T> = (a: T, b: T) => number;

export type BinarySearchTreeLeaf<T> = {
    data : T;
};

export type BinarySearchTreeLeftBranch<T> = {
    left : BinarySearchTreeNode<T>;
};

export type BinarySearchTreeRightBranch<T> = {
    right : BinarySearchTreeNode<T>;
};

export type BinarySearchTreeBranch<T> = BinarySearchTreeLeaf<T> &
    (
        | (BinarySearchTreeLeftBranch<T> & Partial<BinarySearchTreeRightBranch<T>>)
        | (BinarySearchTreeRightBranch<T> & Partial<BinarySearchTreeLeftBranch<T>>)
    );

export type BinarySearchTreeNode<T> = BinarySearchTreeLeaf<T> & Omit<Partial<BinarySearchTreeBranch<T>>, 'data'>;

export type BinarySearchTree<T> = Partial<BinarySearchTreeNode<T>>;

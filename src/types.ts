export type CompareFunction<T> = (a: T, b: T) => number;

export type BSTLeaf<T> = {
    data : T;
};

export type BSTLeftBranch<T> = {
    left : BSTNode<T>;
};

export type BSTRightBranch<T> = {
    right : BSTNode<T>;
};

export type BSTBranch<T> = BSTLeaf<T> &
    (
        | (BSTLeftBranch<T> & Partial<BSTRightBranch<T>>)
        | (BSTRightBranch<T> & Partial<BSTLeftBranch<T>>)
    );

export type BSTNode<T> = BSTLeaf<T> & Omit<Partial<BSTBranch<T>>, 'data'>;

export type BST<T> = Partial<BSTNode<T>>;

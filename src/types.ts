export type CompareFunction<T> = (a: T, b: T) => number;

export type BinaryTreeLeaf<T> = {
    data : T;
};

export type BinaryTreeLeftBranch<T> = {
    left : BinaryTreeNode<T>;
};

export type BinaryTreeRightBranch<T> = {
    right : BinaryTreeNode<T>;
};

export type BinaryTreeBranch<T> = BinaryTreeLeaf<T> &
    (
        | (BinaryTreeLeftBranch<T> & Partial<BinaryTreeRightBranch<T>>)
        | (BinaryTreeRightBranch<T> & Partial<BinaryTreeLeftBranch<T>>)
    );

export type BinaryTreeNode<T> = BinaryTreeLeaf<T> & Omit<Partial<BinaryTreeBranch<T>>, 'data'>;

export type BinaryTree<T> = Partial<BinaryTreeNode<T>>;

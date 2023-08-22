export type CompareFunction<T> = (currentNode: T, parentNode: T) => number;

export type BinaryTreeLeaf<T> = {
    data : T;
};

export type BinaryTreeMinBranch<T> = {
    min : BinaryTreeNode<T>;
};

export type BinaryTreeMaxBranch<T> = {
    max : BinaryTreeNode<T>;
};

export type BinaryTreeBranch<T> = BinaryTreeLeaf<T> &
    (
        | (BinaryTreeMaxBranch<T> & Partial<BinaryTreeMinBranch<T>>)
        | (BinaryTreeMinBranch<T> & Partial<BinaryTreeMaxBranch<T>>)
    );

export type BinaryTreeNode<T> = BinaryTreeLeaf<T> & Omit<Partial<BinaryTreeBranch<T>>, 'data'>;

export type BinaryTree<T> = Partial<BinaryTreeNode<T>>;

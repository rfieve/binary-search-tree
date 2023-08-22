export type CompareFunction<T> = (currentNode: T, parentNode: T) => number;

export type BinaryTreeLeaf<T> = {
    data : T;
};

export type BinaryTreeNode<T> = BinaryTreeLeaf<T> & {
    max? : BinaryTreeNode<T>;
    min? : BinaryTreeNode<T>;
};

export type BinaryTree<T> = Partial<BinaryTreeNode<T>>;

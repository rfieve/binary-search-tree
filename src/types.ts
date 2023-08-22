export type CompareFunction<T> = (currentNode: T, parentNode: T) => number;

export type BinaryTreeNode<T> = {
    data : T;
    max? : BinaryTreeNode<T>;
    min? : BinaryTreeNode<T>;
};

export type BinaryTree<T> = Partial<BinaryTreeNode<T>>;

export type CompareFunction<T> = (currentNode: T, parentNode: T) => number;

export type BinaryTreeNode<T> = {
    data   : T;
    left?  : BinaryTreeNode<T>;
    right? : BinaryTreeNode<T>;
};

export type BinaryTree<T> = Partial<BinaryTreeNode<T>>;

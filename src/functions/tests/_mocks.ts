import { BinaryTree } from 'src/types';

export function compareFunction(currentNode: number, parentNode: number) {
    return currentNode - parentNode;
}

export const mockedArray = [10, 2, 5, 50];

export const mockedTree: BinaryTree<number> = {
    data  : 10,
    right : { data: 50 },
    left  : { data: 2, right: { data: 5 } },
};

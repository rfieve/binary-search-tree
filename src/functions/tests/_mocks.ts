import { BinaryTree } from 'src/types';

export function compareFunction(currentNode: number, parentNode: number) {
    return currentNode - parentNode;
}

export const mockedArray = [10, 32, 21, 2, 89, 5, 50];
export const mockedArrayOrdered = mockedArray.slice().sort((a, b) => a - b);
export const mockedArrayReversed = mockedArrayOrdered.slice().reverse();

export const mockedTree: BinaryTree<number> = {
    data : 10,
    max  : {
        data : 32,
        min  : {
            data : 21,
        },
        max : {
            data : 89,
            min  : {
                data : 50,
            },
        },
    },
    min : {
        data : 2,
        max  : {
            data : 5,
        },
    },
};

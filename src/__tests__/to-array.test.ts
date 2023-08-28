import {
    mockedArrayInOrder,
    mockedArrayInOrderReversed,
    mockedArrayLevelOrder,
    mockedArrayLevelOrderReverse,
    mockedArrayPostOrder,
    mockedArrayPostOrderReverse,
    mockedArrayPreOrder,
    mockedArrayPreOrderReverse,
    mockedUnbalancedTree,
} from 'src/__tests__/_mocks';
import {
    toArrayInOrder,
    toArrayInOrderReverse,
    toArrayLevelOrder,
    toArrayLevelOrderReverse,
    toArrayPostOrder,
    toArrayPostOrderReverse,
    toArrayPreOrder,
    toArrayPreOrderReverse,
} from 'src/functions/to-array';

describe('toArrayInOrder', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayInOrder(mockedUnbalancedTree)).toEqual(mockedArrayInOrder);
    });
});

describe('toArrayInOrderReverse', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayInOrderReverse(mockedUnbalancedTree)).toEqual(mockedArrayInOrderReversed);
    });
});

describe('toArrayPreOrder', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayPreOrder(mockedUnbalancedTree)).toEqual(mockedArrayPreOrder);
    });
});

describe('toArrayPreOrderReverse', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayPreOrderReverse(mockedUnbalancedTree)).toEqual(mockedArrayPreOrderReverse);
    });
});

describe('toArrayPostOrder', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayPostOrder(mockedUnbalancedTree)).toEqual(mockedArrayPostOrder);
    });
});

describe('toArrayPostOrderReverse', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayPostOrderReverse(mockedUnbalancedTree)).toEqual(mockedArrayPostOrderReverse);
    });
});

describe('toArrayLevelOrder', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayLevelOrder(mockedUnbalancedTree)).toEqual(mockedArrayLevelOrder);
    });
});

describe('toArrayLevelOrderReverse', () => {
    it('should convert binary search tree to an array correctly', () => {
        expect(toArrayLevelOrderReverse(mockedUnbalancedTree)).toEqual(
            mockedArrayLevelOrderReverse
        );
    });
});

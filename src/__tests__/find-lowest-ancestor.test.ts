import { findLowestAncestor, makeFindLowestAncestor } from '../functions/find-lowest-ancestor'
import { compare, mockedUnbalancedTree } from './_mocks'

describe('findLowestAncestor', () => {
    it('should return the correct ancestor', () => {
        const result = findLowestAncestor(mockedUnbalancedTree, compare, 13, 50)
        expect(result?.node?.data?.[0]).toBe(32)
    })

    it('should return the correct ancestor when no subtree', () => {
        const result = findLowestAncestor(mockedUnbalancedTree, compare, 1, 0)
        expect(result?.node?.data?.[0]).toBe(2)
    })

    it('should return the correct ancestor when one is the ansestor of the other', () => {
        const result = findLowestAncestor(mockedUnbalancedTree, compare, 2, 5)
        expect(result?.node?.data?.[0]).toBe(2)
    })

    it('should return the hypothetical ancestor when an element has no match', () => {
        const result = findLowestAncestor(mockedUnbalancedTree, compare, 13, 100)
        expect(result?.node?.data?.[0]).toBe(32)
    })
})

describe('makeFindLowestAncestor', () => {
    const boundFindLowestAncestor = makeFindLowestAncestor(compare)

    it('should return the correct ancestor', () => {
        const result = boundFindLowestAncestor(mockedUnbalancedTree, 13, 50)
        expect(result?.node?.data?.[0]).toBe(32)
    })

    it('should return the correct ancestor when no subtree', () => {
        const result = boundFindLowestAncestor(mockedUnbalancedTree, 1, 0)
        expect(result?.node?.data?.[0]).toBe(2)
    })

    it('should return the correct ancestor when one is the ansestor of the other', () => {
        const result = boundFindLowestAncestor(mockedUnbalancedTree, 2, 5)
        expect(result?.node?.data?.[0]).toBe(2)
    })

    it('should return the hypothetical ancestor when an element has no match', () => {
        const result = boundFindLowestAncestor(mockedUnbalancedTree, 13, 100)
        expect(result?.node?.data?.[0]).toBe(32)
    })
})

import { compare, mockedUnbalancedTree } from './_mocks'
import { findGte, makeFindGte } from '../functions/find-gte'

describe('findGte', () => {
    it('should findGte all nodes which are greater or equal than the element', () => {
        const results = findGte(mockedUnbalancedTree, compare, 10),
              mapped = results.flatMap(({ node }) => node?.data)
        expect(mapped).toEqual([10, 32, 13, 89, 50])
    })

    it('should not findGte a node in an empty tree', () => {
        const results = findGte({ data: [] }, compare, 10),
              mapped = results.flatMap(({ node }) => node?.data)
        expect(mapped).toEqual([])
    })
})

describe('makeFindGte', () => {
    const boundFindGte = makeFindGte(compare)

    it('should findGte all nodes which are greater or equal than the element', () => {
        const results = boundFindGte(mockedUnbalancedTree, 10),
              mapped = results.flatMap(({ node }) => node?.data)
        expect(mapped).toEqual([10, 32, 13, 89, 50])
    })

    it('should not findGte a node in an empty tree', () => {
        const results = boundFindGte({ data: [] }, 10),
              mapped = results.flatMap(({ node }) => node?.data)
        expect(mapped).toEqual([])
    })
})

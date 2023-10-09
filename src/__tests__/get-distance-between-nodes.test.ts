import {
    getDistanceBetweenNodes,
    makeGetDistanceBetweenNodes,
} from '../functions/get-distance-between-nodes'
import { compare, mockedUnbalancedTree } from './_mocks'

describe('getDistanceBetweenNodes ', () => {
    it('should return the correct distance', () => {
        const result = getDistanceBetweenNodes(mockedUnbalancedTree, compare, 13, 50)
        expect(result).toBe(3)
    })

    it('should return undefined when one has no match', () => {
        const result = getDistanceBetweenNodes(mockedUnbalancedTree, compare, 13, 20)
        expect(result).toBeUndefined()
    })
})

describe('makeGetDistanceBetweenNodes', () => {
    const bound = makeGetDistanceBetweenNodes(compare)

    it('should return the correct distance', () => {
        const result = bound(mockedUnbalancedTree, 13, 50)
        expect(result).toBe(3)
    })

    it('should return undefined when one has no match', () => {
        const result = bound(mockedUnbalancedTree, 13, 20)
        expect(result).toBeUndefined()
    })
})

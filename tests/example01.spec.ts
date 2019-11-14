import { sum } from '../src/example01'

test(`sum should return the sum of two parameters passed`, () => {
  expect(sum(1, 2)).toBe(3)
})
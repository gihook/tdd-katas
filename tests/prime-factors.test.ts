import { PrimeFactors } from '../src/prime-factors';

describe('PrimeFactors', () => {
  it('description', () => {
    expect(PrimeFactors.generate(2)).toEqual([2]);
    expect(PrimeFactors.generate(3)).toEqual([3]);
    expect(PrimeFactors.generate(4)).toEqual([2, 2]);
    expect(PrimeFactors.generate(5)).toEqual([5]);
    expect(PrimeFactors.generate(6)).toEqual([2, 3]);
    expect(PrimeFactors.generate(7)).toEqual([7]);
    expect(PrimeFactors.generate(8)).toEqual([2, 2, 2]);
    expect(PrimeFactors.generate(9)).toEqual([3, 3]);
    expect(PrimeFactors.generate(10)).toEqual([2, 5]);
    expect(PrimeFactors.generate(11)).toEqual([11]);
    expect(PrimeFactors.generate(12)).toEqual([2, 2, 3]);
    expect(PrimeFactors.generate(2 * 2 * 3 * 3 * 5 * 5 * 7 * 11 * 13)).toEqual([
      2,
      2,
      3,
      3,
      5,
      5,
      7,
      11,
      13,
    ]);
  });
});

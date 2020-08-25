import { PrimeFactors } from '../src/prime-factors';

describe('PrimeFactors', () => {
  it('description', function () {
    expect(PrimeFactors.generate(2)).toEqual([2]);
    expect(PrimeFactors.generate(3)).toEqual([3]);
    expect(PrimeFactors.generate(4)).toEqual([2, 2]);
    expect(PrimeFactors.generate(5)).toEqual([5]);
    expect(PrimeFactors.generate(6)).toEqual([3, 2]);
  });
});

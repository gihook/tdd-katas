export class PrimeFactors {
  static generate(input: number) {
    return PrimeFactors.getPrimeFactors(input, []);
  }

  private static getPrimeFactors(input: number, primeFactors: number[]) {
    if (input === 1) return primeFactors;

    for (let factor = 2; factor <= input; factor++) {
      if (input % factor !== 0) continue;

      return PrimeFactors.getPrimeFactors(input / factor, [
        ...primeFactors,
        factor,
      ]);
    }
  }
}

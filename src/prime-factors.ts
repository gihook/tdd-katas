export class PrimeFactors {
  static generate(input: number) {
    const factors = [];
    let rest = input;
    let devider = 2;

    while (rest > 1) {
      while (rest % devider === 0) {
        factors.push(devider);
        rest = rest / devider;
      }
      devider++;
    }

    return factors;
  }
}

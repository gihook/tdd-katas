export class PrimeFactors {
  static generate(input: number) {
    const factors = [];
    let rest = input;

    if (input % 3 === 0) {
      factors.push(3);
      rest = rest / 3;
    }

    if (input % 2 === 0) {
      factors.push(2);
      rest = rest / 2;
    }

    if (rest !== 1) factors.push(rest);

    return factors;
  }
}

export class RomanNumerals {
  static numberPairs = [
    { number: 1000, prefix: 'M' },
    { number: 900, prefix: 'CM' },
    { number: 500, prefix: 'D' },
    { number: 400, prefix: 'XD' },
    { number: 100, prefix: 'C' },
    { number: 90, prefix: 'XC' },
    { number: 50, prefix: 'L' },
    { number: 40, prefix: 'XL' },
    { number: 10, prefix: 'X' },
    { number: 9, prefix: 'IX' },
    { number: 5, prefix: 'V' },
    { number: 4, prefix: 'IV' },
    { number: 1, prefix: 'I' },
  ];

  parseInt(input: number) {
    if (input === 0) return '';

    const { number, prefix } = RomanNumerals.numberPairs.find(
      ({ number }) => input >= number
    );

    return prefix + this.parseInt(input - number);
  }
}

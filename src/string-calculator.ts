export class StringCalculator {
  add(input: string, delimiter: string = ',') {
    if (input.startsWith('//')) {
      const delimiter = input.split('\n')[0].slice(2).trimRight();
      const parsedInput = input.slice(4);

      return this.add(parsedInput, delimiter);
    }

    return input
      .split('\n')
      .reduce((a, c) => a + this.parseLine(c, delimiter), 0);
  }

  private parseLine(input: string, delimiter: string = ',') {
    if (input === '') return 0;
    if (!input.includes(delimiter)) return parseInt(input);

    const items = input.split(delimiter);

    return items.reduce((a, c) => a + this.parseLine(c, delimiter), 0);
  }
}

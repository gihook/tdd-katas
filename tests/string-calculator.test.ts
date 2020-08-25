import { StringCalculator } from '../src/string-calculator';

describe('StringCalculator', () => {
  it('add()', () => {
    const instance = new StringCalculator();

    expect(instance.add('')).toBe(0);
    expect(instance.add('1')).toBe(1);
    expect(instance.add('2')).toBe(2);
    expect(instance.add('3')).toBe(3);
    expect(instance.add('343')).toBe(343);
    expect(instance.add('1,2')).toBe(3);
    expect(instance.add('2,2')).toBe(4);
    expect(instance.add('4,23')).toBe(27);
    expect(instance.add('4,23,43')).toBe(70);
    expect(instance.add('14,123,43')).toBe(180);
    expect(instance.add('14\n3')).toBe(17);
    expect(instance.add('14,12\n3')).toBe(29);
    expect(instance.add('14,12\n3')).toBe(29);
    expect(instance.add('14,12\n3,11,9\n1')).toBe(50);
    expect(instance.add('//;\n14;12\n3;11;9\n1')).toBe(50);
    expect(instance.add('//;\n1;122\n30;11;9\n1')).toBe(174);
  });
});

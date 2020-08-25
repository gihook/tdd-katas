import { RomanNumeral } from '../src/roman-numeral';

describe('RomanNumeral', () => {
  it('parseInt()', () => {
    const instance = new RomanNumeral();

    expect(instance.parseInt(1)).toBe('I');
    expect(instance.parseInt(2)).toBe('II');
    expect(instance.parseInt(3)).toBe('III');
    expect(instance.parseInt(4)).toBe('IV');
    expect(instance.parseInt(5)).toBe('V');
    expect(instance.parseInt(6)).toBe('VI');
    expect(instance.parseInt(7)).toBe('VII');
    expect(instance.parseInt(8)).toBe('VIII');
    expect(instance.parseInt(9)).toBe('IX');
    expect(instance.parseInt(10)).toBe('X');
    expect(instance.parseInt(11)).toBe('XI');
    expect(instance.parseInt(12)).toBe('XII');
    expect(instance.parseInt(13)).toBe('XIII');
    expect(instance.parseInt(14)).toBe('XIV');
    expect(instance.parseInt(15)).toBe('XV');
    expect(instance.parseInt(16)).toBe('XVI');
    expect(instance.parseInt(17)).toBe('XVII');
    expect(instance.parseInt(18)).toBe('XVIII');
    expect(instance.parseInt(19)).toBe('XIX');
    expect(instance.parseInt(20)).toBe('XX');
    expect(instance.parseInt(21)).toBe('XXI');
    expect(instance.parseInt(22)).toBe('XXII');
    expect(instance.parseInt(35)).toBe('XXXV');
    expect(instance.parseInt(40)).toBe('XL');
    expect(instance.parseInt(41)).toBe('XLI');
    expect(instance.parseInt(49)).toBe('XLIX');
    expect(instance.parseInt(50)).toBe('L');
    expect(instance.parseInt(58)).toBe('LVIII');
    expect(instance.parseInt(79)).toBe('LXXIX');
    expect(instance.parseInt(84)).toBe('LXXXIV');
    expect(instance.parseInt(90)).toBe('XC');
    expect(instance.parseInt(95)).toBe('XCV');
    expect(instance.parseInt(100)).toBe('C');
    expect(instance.parseInt(153)).toBe('CLIII');
    expect(instance.parseInt(342)).toBe('CCCXLII');
    expect(instance.parseInt(400)).toBe('XD');
    expect(instance.parseInt(589)).toBe('DLXXXIX');
    expect(instance.parseInt(943)).toBe('CMXLIII');
    expect(instance.parseInt(1943)).toBe('MCMXLIII');
  });

  it('parseString()', () => {
    const instance = new RomanNumeral();

    expect(instance.parseString('I')).toBe(1);
    expect(instance.parseString('II')).toBe(2);
    expect(instance.parseString('III')).toBe(3);
    expect(instance.parseString('IV')).toBe(4);
    expect(instance.parseString('V')).toBe(5);
    expect(instance.parseString('VI')).toBe(6);
    expect(instance.parseString('VII')).toBe(7);
    expect(instance.parseString('VIII')).toBe(8);
    expect(instance.parseString('IX')).toBe(9);
    expect(instance.parseString('X')).toBe(10);
    expect(instance.parseString('XI')).toBe(11);
    expect(instance.parseString('XII')).toBe(12);
    expect(instance.parseString('XIII')).toBe(13);
    expect(instance.parseString('XIV')).toBe(14);
    expect(instance.parseString('XV')).toBe(15);
    expect(instance.parseString('XIX')).toBe(19);
    expect(instance.parseString('XX')).toBe(20);
    expect(instance.parseString('XXX')).toBe(30);
    expect(instance.parseString('XXXI')).toBe(31);
    expect(instance.parseString('XXXIV')).toBe(34);
    expect(instance.parseString('XXXIX')).toBe(39);
    expect(instance.parseString('XL')).toBe(40);
    expect(instance.parseString('XLIX')).toBe(49);
    expect(instance.parseString('L')).toBe(50);
    expect(instance.parseString('MMDCCCXLIV')).toBe(2844);
  });
});

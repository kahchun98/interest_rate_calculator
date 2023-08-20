import { simpleInterestCalculator, compoundInterestCalculator } from './interestCalculator';

describe('simpleInterestCalculator', () => {
  test('calculates simple interest', () => {
    const principalAmount = 1000;
    const rate = 0.05;
    const term = 2;

    const result = simpleInterestCalculator(principalAmount, rate, term);

    expect(result).toEqual({
      totalInterestEarned: "100",
      finalBalance: "1100",
    });
  });
});

describe('compoundInterestCalculator', () => {
    test('calculates compount interest for monthly intervals', () => {
      const principalAmount = 1000;
      const rate = 0.05;
      const term = 2;
      const interval = 12;
  
      const result = compoundInterestCalculator(principalAmount, rate, term, interval);
  
      expect(result).toEqual({
        totalInterestEarned: "105",
        finalBalance: "1105",
      });
    });

    test('calculates compount interest for quarterly intervals', () => {
        const principalAmount = 1000;
        const rate = 0.05;
        const term = 2;
        const interval = 4;

        const result = compoundInterestCalculator(principalAmount, rate, term, interval);

        expect(result).toEqual({
            totalInterestEarned: "104",
            finalBalance: "1104",
        });
    });

    test('calculates compount interest for yearly intervals', () => {
        const principalAmount = 1000;
        const rate = 0.05;
        const term = 2;
        const interval = 1;

        const result = compoundInterestCalculator(principalAmount, rate, term, interval);

        expect(result).toEqual({
            totalInterestEarned: "103",
            finalBalance: "1103",
        });
    });


  });
  
import { expect } from 'chai';
import { BmiAlgorithm } from '@/components/bmiAlgorithm';

describe('BmiCalculator', () => {
   it('should return the correct value', () => {
      const bmi = BmiAlgorithm.determine(1.75, 65);
      expect(bmi).to.equal(21.2);
   });

   it('should round half-up', () => {
      const bmi = BmiAlgorithm.determine(1.75, 70);
      expect(bmi).to.equal(22.9);
   });
});

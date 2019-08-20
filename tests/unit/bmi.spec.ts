import { expect } from 'chai';
import { Bmi } from '@/components/bmi';

describe('BmiCalculator', () => {
   it('should return the correct value', () => {
      const bmi = Bmi.determine(1.75, 65);
      expect(bmi).to.equal(21.2);
   });

   it('should round half-up', () => {
      const bmi = Bmi.determine(1.75, 70);
      expect(bmi).to.equal(22.9);
   });
});

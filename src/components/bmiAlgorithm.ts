export class BmiAlgorithm {
   public static determine(length: number, weight: number) {
      const bmi = weight / Math.pow(length, 2);
      return parseFloat(bmi.toFixed(1));
   }
}

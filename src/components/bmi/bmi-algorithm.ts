export class BmiAlgorithm {
    public static determine(request: BmiRequest) {
        const bmi = request.weight / Math.pow(request.length, 2);
        return parseFloat(bmi.toFixed(1));
    }
}

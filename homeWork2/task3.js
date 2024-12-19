class Calculator {
    constructor(initialValue) {
        this.result = initialValue;
    }

    add(value) {
        this.result += value;
        return this;
    }

    subtract(value) {
        this.result -= value;
        return this;
    }

    multiply(value) {
        this.result *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this;
    }

    power(value) {
        this.result = Math.pow(this.result, value);
        return this;
    }

    getResult() {
        return this.result;
    }
}

Array.prototype.unikal = function () {
    return [...new Set(this)];
};

Array.prototype.chopish = function (indices) {
    return indices.map((index) =>
        index >= 0 && index < this.length ? this[index] : undefined
    );
};
const calc = new Calculator(10);
console.log(calc.add(5).subtract(7).getResult());

const calc2 = new Calculator(2);
console.log(calc2.multiply(5).power(2).getResult());

let nums = [3, 32, 432, 243, 43, 3, 432];
console.log(nums.unikal());

console.log(nums.chopish([0, 2, 5]));

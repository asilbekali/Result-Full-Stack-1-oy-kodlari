let num = 7;

function findFactorial(x) {
    if (x <= 1) {
        return 1;
    } else {
        return x * findFactorial(x - 1);
    }
}

console.log(findFactorial(num));

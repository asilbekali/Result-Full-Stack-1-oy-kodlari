function findNoNumbers(arr) {
    let res = [];

    let maxNum = Math.max(...arr);

    for (let i = 1; i <= maxNum; i++) {
        if (!arr.includes(i)) {
            res.push(i);
        }
    }
    return res;
}

console.log(findNoNumbers([2, 4, 4, 5, 6, 9, 14]));

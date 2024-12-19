

function sumDigits(num){
    num = String(num)
    let res = num.split('')
    return res.reduce((sum, digit) => sum + Number(digit), 0)
}

console.log(sumDigits(12345))
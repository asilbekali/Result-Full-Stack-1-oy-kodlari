

function processNumbers(numArry){
    let res = []
    for(let i of numArry){
        if(i >= 0){
            res.push(i * i)
        }
    }
    console.log(res)
}


processNumbers([4, -2, 3, -1, 0, 5])
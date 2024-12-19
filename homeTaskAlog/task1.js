function outputStarts(son){
    for(let i = 1; i <= son; i++){
        let space = " ".repeat(son - i);
        let star = "*".repeat(2 * i - 1);
        console.log(space + star)
    }
}

outputStarts(5)

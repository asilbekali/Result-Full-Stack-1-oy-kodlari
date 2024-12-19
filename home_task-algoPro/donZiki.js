
let johaBall = 0
let samantoyBall = 0

function donZiki(){
    let u1 = prompt("Enter joha")
    let u2 = prompt("Enter samantoy")
    if(u1 === "qog'oz" && u2 === "tosh" || u1 === "tosh" && u2 === "qaychi" || u1 === "qaychi" && u2 === "qog'oz"){
        ++johaBall;
    }
    else if(u2 === "qog'oz" && u1 === "tosh" || u2 === "tosh" && u1 === "qaychi" || u2 === "qaychi" && u1 === "qog'oz"){
        ++samantoyBall;
    }
    else if(u1 == u2){
        console.log("Durrang")
    }
    else {
        console.log("Nimadur xato ketgan !");
    }
    let resStar = confirm("O'yini davom ettirasizmi ?")

    if(resStar){
        donZiki()
    }
    else{
        checkBall(johaBall, samantoyBall)
    }
}

function checkBall(johajon, samanjon){
    if(johajon > samanjon){
        alert(`joha yutdi overal ball ${johajon}`)
    }
    else if(johajon == samanjon){
        alert(`durranng natija\nsamamantoy: ${samanjon}\nJoha: ${johajon}`)
    }
    else{
        alert(`samantoy yutdi overal ball ${samanjon}`)
    }
}

donZiki()

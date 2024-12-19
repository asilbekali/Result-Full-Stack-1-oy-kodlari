let joha = "qaychi"
let samantoy = "qog'oz"

function donZiki(u1, u2){
    if(u1 === "qog'oz" && u2 === "tosh" || u1 === "tosh" && u2 === "qachi" || u1 === "qaychi" && u2 === "qog'oz"){
        console.log(`${u1} joha yutdi`);
    }
    else if(u2 === "qog'oz" && u1 === "tosh" || u2 === "tosh" && u1 === "qachi" || u2 === "qaychi" && u1 === "qog'oz"){
        console.log(`${u1} samantoy yutdi`);
    }
    else{
        console.log("Nimadur xato ketgan !");
    }
}

donZiki(joha, samantoy)
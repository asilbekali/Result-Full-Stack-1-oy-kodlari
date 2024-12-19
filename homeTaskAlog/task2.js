
function check(str){
    let count = {}
    for(let i = 0; i < str.length; i++){
        let word = str[i];
        if(word !== " "){
            if(!count[word]){
                count[word] = 1;
            }
            else{
                count[word]++;
            }
        } 
    }
    for(let i in count){
        console.log(i ," - ", count[i])
    }
}

check("salomsa")
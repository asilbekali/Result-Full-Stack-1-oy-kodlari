let start = 0
let end = 10
let res = 0

while(start <= end){
    start++;
    if(start % 3 == 0){
        res+=start
    }
};

console.log(`Toq sonlaring yig'indisi || ${res} ||`)
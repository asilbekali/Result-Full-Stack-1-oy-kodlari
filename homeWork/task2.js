


function areAnagrams(word1, word2){
    if(word1.length !== word2.length){
        return false
    }
    else{
        let w1 = word1.split("").sort().join("")
        let w2 = word2.split("").sort().join("")
        return w1 == w2
    }
}

console.log(areAnagrams("listen", "silent"));

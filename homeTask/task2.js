console.clear()

function reverseWords(word){
    word = word.split(' ')
    for(let i = 0; i < word.length; i++){
        word[i] = word[i].split('').reverse().join("")
    }
    console.log(word.join(' '));
    
}

reverseWords("salom nima")


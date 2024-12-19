function findLongestWord(sentence) {
    const words = sentence.split(" "); 
    const lengths = words.map(word => word.length); 
    const maxLength = Math.max(...lengths);
    return words[lengths.indexOf(maxLength)]; 
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); 
function countVowels(word) {
    let vowels = "euioa".split("");
    let cnt = 0;
    for (let i of word) {
        if (vowels.includes(i)) {
            cnt++;
        }
    }
    return `Vowels count: ${cnt}`;
}

console.log(countVowels("salom"));


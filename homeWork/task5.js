function generatePassword(length, Lamp = false) {

    let password = "";
    let wordsNumbers = '1234567890qwertyuiopasdfghjklzxcvbnm'

    if (Lamp == true) {
        for (let i = 0; i < length; i++) {
            password += Math.floor(Math.random() * 10);
        }
        return password;
    }
    else{
        for(let i = 0; i < length; i++){
            let word = Math.floor(Math.random() * wordsNumbers.length)
            password += wordsNumbers.charAt(word)
        }
        return password
    }
}

console.log(generatePassword(4));

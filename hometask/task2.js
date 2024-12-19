function generatePassword(length) {
    let belgilar = "qwertyuiopasdfghjklzxcvbnm1234567890"
    let res = ""
    for(let i = 0; i < length; i++){
        const just = Math.floor(Math.random() * belgilar.length)
        res += belgilar.charAt(just)
    }
    console.log("Your random generation password: " , res)


}

generatePassword(8)
function check(data) {
    let belgi = { "(": ")", "{": "}", "[": "]" };
    let stk = [];

    for (let i of data) {
        if (i in belgi) {
            stk.push(i);
        } else {
            let oxirgi = stk.pop();
            if (belgi[oxirgi] !== i) {
                return false;
            }
        }
    }
    return stk.length === 0;
}
console.log(check("[]{}")); 




Array.prototype.lastData = function(){
    if(this){
        return this[this.length -1]
    }
    else{
        return -1
    }
}

let a = [1, 2, 4, "salom"]
let b = [1, 2, 4, "salom", "return b"]

console.log(a.lastData());
console.log(b.lastData());

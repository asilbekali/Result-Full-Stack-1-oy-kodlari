// siklar

// let list =  +prompt("Listing")
// let writ =  +prompt("Listing")
// let read =  +prompt("Listing")
// let speak =  +prompt("Listing")

// let res = (Number(list) + Number(writ) + Number(read) + Number(speak)) / 4

// if(res >= 8.5){
//     alert("super grant")
// }
// else if(res >= 7.5){
//     alert("grant")
// }
// else if(res >= 6.5){
//     alert("Kantrak")
// }
// else if(res >= 5.5){
//     alert("super kantrak")
// }
// else{
//     alert("jimgina surin ukam yiqildiz")
// }

// ----------------------------------------------------------

// let data = 1

// while(data <= 100){
//     if(data % 15 == 0){
//         console.log("fizzbaz ", data)
//     }
//     else if(data % 5 == 0){
//         console.log("bazz ", data)
//     }
//     else if(data % 3 == 0){
//         console.log("fizz ", data)
//     }
//     data++;
// }

// -----------------------------------------------------------

// let i = 1;

// for (; i <= 3; i++) {
//     let star = "";
//     for (let j = 1; j <= i; j++) {
//         star += "*";
//     }
//     console.log(star);
// }

// ----------------------------------------------------------------

// let kotta = 5;
// let kichik = 4;
// let count=0;

// while(kotta >= kichik){
//     kotta-=kichik;
// }
// console.log(kotta);

// ---------------------------------------------------------

// let kotta = 10;
// let kichik = 3;
// let count=0;

// while(kotta >= kichik){
//     kotta-=kichik;
//     count++;
// }
// console.log(count);

// -------------------------------------------------------------

// let year1 = +prompt("Enter year");
// let gender1 = confirm("Enter your gender Yes--> Male No--> Fmale");

// function my_function(year, gender) {
//     let res = 2024 - year;
//     if (gender) {
//         if (res >= 45) {
//             return "Hulas qaridiz pensaga gooo";
//         } else {
//             return `hali bor pensaga sizni yoshiz endigina ${res}`;
//         }
//     } else {
//         if (res >= 65) {
//             return "Hulas qaridiz pensaga gooo";
//         } else {
//             return `hali bor pensaga sizni yoshiz endigina ${res}`;
//         }
//     }
// }

// console.log(my_function(year1, gender1));

// let start = confirm("O'yini boshlaymizmi ?")

// if(start){
//     let user1 = prompt("Enter user1")
//     let user2 = prompt("Enter user2")
//     console.log(check(user1, user2))
// }else{
//     console.log("O'ynamasen o'yname :(")
// }
// ----------------------------------------------------
// function check(user1, user2){
//     if(user1 === "qog'oz" && user2 === "tosh" || user1 === "qaychi" && user2 === "qog'oz"|| user1 === "tosh" && user2 === "qaychi"){
//         return `user1 yutdi ${user1}`
//     }
//     else if(user1 === user2){
//         return "teglik"
//     }
//     else{
//         return `user2 yutdi ${user2}`
//     }
// }
// --------------------------------------------------------
// let user = +prompt("Enter a number");

// function rek(son) {
//     if (son <= 1) {
//         return 1; 
//     } else {
//         return son * rek(son - 1); 
//     }
//----------------------------------------------
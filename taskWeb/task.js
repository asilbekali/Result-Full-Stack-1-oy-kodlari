let userName = NaN;
let password = NaN;

function register() {
    userName = prompt("Enter your user name");
    password = prompt("Enter password");
    if (userName && password) {
        const userData = { userName, password };
        localStorage.setItem("UserData", JSON.stringify(userData));
        console.log("Ma'lumotlar saqlandi");
    } else {
        console.log("User name va parol bo'sh bo'lishi mumkin emas");
    }
}

function login() {
    const userName2 = prompt("Enter your user name");
    const password2 = prompt("Enter password");
    const user = JSON.parse(localStorage.getItem("UserData"));

    if (!user || user.password !== password2 || user.userName !== userName2) {
        console.log("Bunday foydalanuvchi topilmadi");
    } else {
        console.log(`Muvaffaqiyatli tizimga kirdingiz ${user.userName} !`);
    }
}

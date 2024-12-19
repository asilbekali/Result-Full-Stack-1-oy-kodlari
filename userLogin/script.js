let userarry = [];

function askUser() {
    let ask = confirm("Do you have an account on our website?");

    if (ask) {
        let userName = prompt("Enter name");
        let userPas = prompt("Enter password");

        let userFound = false; 
        for (let i of userarry) {
            if (i.name === userName && i.pas === userPas) {
                alert(`Welcome ${i.name} \n your date ${String(i)}`);
                userFound = true;
                break;
            }
        }

        if (!userFound) {
            alert("You don't have this account!");
        }

    } else {
        let userName = prompt("Enter name");
        let userPas = prompt("Enter password");
        let dateNow = new Date();
        let userobj = {
            name: userName,
            pas: userPas,
            date: dateNow
        };
        userarry.push(userobj);
        alert("Account created successfully!");
    }
}

while (true) {
    askUser();
    let stop = confirm("Do you want to stop?");
    if (stop === true) {
        break;
    }
}

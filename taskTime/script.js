try {
    let min = +prompt("Enter minute");
    let secund = +prompt("Enter second");

    const timer = setInterval(() => {
        if (secund <= 0) { 
            if (min <= 0) { 
                clearInterval(timer); 
                console.log("Timer finished!"); 
            }
            secund = 59; 
            min -= 1;   
        } else {
            secund -= 1;
        }

        if (min >= 0 && secund >= 0) {
            console.log(`${min}:${secund}`);
        }
    }, 1000);
} catch (error) {
    console.log(error, "Error");
} 

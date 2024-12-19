let date = new Date();
let nowMin = date.getMinutes();
let nowSec = date.getSeconds();

console.log(`Hozirgi Minut: ${nowMin} va Sekund: ${nowSec}`);


function alarm_of_deat() {
    let alarmTime = prompt("Enter alarm time (M --> 12:25)").split(":");

    if (alarmTime.length === 2) {
        let minutes = +alarmTime[0];
        let seconds = +alarmTime[1];

        if (minutes < 60 && seconds < 60) {
            if (minutes < nowMin || (minutes === nowMin && seconds <= nowSec)) {
                alert("Kiritilgan vaqt hozirgi vaqtdan oldin bo'lishi kerak. Qayta urinib ko'ring.");
                alarm_of_deat();  
                return;
            }

            let invalit = setInterval(() => {
                let date = new Date();
                let currentMin = date.getMinutes();
                let currentSec = date.getSeconds();

                let remainingMin = minutes - currentMin;
                let remainingSec = seconds - currentSec;

                if (remainingSec < 0) {
                    remainingSec += 60;
                    remainingMin -= 1;
                }

                console.log(`Qolgan vaqt: ${remainingMin} minut ${remainingSec} sekund`);

                if (currentMin === minutes && currentSec === seconds) {
                    alert("Uyg'on, seni buyuk dangasalik kutmoqda!");
                    clearInterval(invalit);  
                }
            }, 1000);
        } else {
            alert("Minut 60 dan kichik, sekund 60 dan kichik bo'lishi kerak, qayta urinib ko'ring.");
            alarm_of_deat(); 
        }
    } else {
        alert("Noto'g'ri format kiritdingiz, vaqtni to'g'ri kiriting (masalan: 12:25).");
        alarm_of_deat();  
    }
}

alarm_of_deat();

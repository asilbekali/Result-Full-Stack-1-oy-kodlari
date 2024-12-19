let test = document.querySelector(".box");
console.log(test);

async function getData() {
    try {
        let response = await fetch("https://api.escuelajs.co/api/v1/products");
        let jsdata = await response.json();
        console.log(jsdata ,555);
        
        mapHTML(jsdata);
    } catch (error) {
        console.error("Xatolik yuz berdi:", error);
    }
}

function mapHTML(arr) {
    arr.forEach((r) => {
        console.log(r);
        test.insertAdjacentHTML(
            "beforeend",
            `<div>
                <img src="https://www.wildnatureimages.com/images/640/070620-014-The-Tetons.jpg" alt="Error">
                <h3>${r.title}</h3>
                <strong>${r.price} $</strong>
            </div>
        `);
    });
}

getData();
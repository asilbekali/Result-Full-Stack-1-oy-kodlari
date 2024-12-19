
const ht = document.querySelector(".box");

async function api() {
    try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await response.json();
        mapHtml(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        ht.innerHTML = "<p>Failed to load data. Please try again later.</p>";
    }
}

function mapHtml(arr) {
    arr.forEach(item => {
        ht.insertAdjacentHTML(
            "beforeend",
            `<div class="card">
                <img src="https://plus.unsplash.com/premium_photo-1672115680958-54438df0ab82?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8fDB8fHww" alt="weffe"}">
                <h2>${item.title}</h2>
                <h4>$${item.price}</h4>
                <p>${item.description || "No description available."}</p>
                <p></p>
                <button>Buy now</button>
            </div>`
        );
    });
}

api();

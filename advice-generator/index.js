const btn = document.querySelector('.btn');
const adviceID = document.querySelector('.advice-id');
const message = document.querySelector('.advice');


const url = "https://api.adviceslip.com/advice"

function displayAdvice(data) {
    adviceID.textContent = `${data["slip"]["id"]}`;
    message.textContent = `${data["slip"]["advice"]}`;
}

async function fetchAdvice() {
    const res = await fetch(url);
    const data = await res.json();
    return displayAdvice(data)
}
//Start with a message when you open site
if(message.textContent == ""){
    fetchAdvice()
}
btn.addEventListener("click", fetchAdvice)

let form = document.querySelector('form');
let card = document.querySelector('.card-1');
let card2 = document.querySelector('.card-2');
let email = document.querySelector('#email')
let emailConfirm = document.querySelector('.email-confirmation');
let dismiss = document.querySelector('.dismiss');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    card.classList.add("hide");
    card2.classList.remove("hide");
    emailConfirm.textContent = email.value;
})

dismiss.addEventListener("click", (e) => {
    e.preventDefault();
    card.classList.remove("hide");
    card2.classList.add("hide");
    email.value = ""
})


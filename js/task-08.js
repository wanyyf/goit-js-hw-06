const emailEl = document.querySelector('input[type = "email"]')
const passwordEl = document.querySelector('input[type = "password"]')
const submitBtnEl = document.querySelector("button")
const formEl = document.querySelector(".login-form");

const onFormSubCkick = (evt) => {
    evt.preventDefault();
    if (emailEl.value === "" || passwordEl.value === "" ) {
        alert("Все поля должны быть заполнены ")
    }
    const formValue = {
     email: emailEl.value,
    password: passwordEl.value
    }
    console.log(formValue);
    formEl.reset()

}
formEl.addEventListener("submit", onFormSubCkick)

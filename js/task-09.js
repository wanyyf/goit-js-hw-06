function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const spanColorEl = document.querySelector(".color")
const btnEl = document.querySelector(".change-color")
const bodyEl = document.querySelector("body")
console.dir(bodyEl.style);
const onClickBtn = (evt) => {
spanColorEl.textContent = getRandomHexColor()
bodyEl.style.backgroundColor = getRandomHexColor()
}

btnEl.addEventListener("click",onClickBtn )
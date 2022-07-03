function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesEl = document.querySelector("#boxes")
const createEl = document.querySelector("button[data-create]")
const destroyEl = document.querySelector("button[data-destroy]")
const inputEl = document.querySelector("input")


function createBoxes(amount) {
 amount = inputEl.value
   for ( let i = 0; i < amount; i += 1 ){
   const divEl = document.createElement("div")
   divEl.style.backgroundColor = getRandomHexColor();
   divEl.classList.add("item")
   divEl.style.width = `${30+(i*10)}px`
   divEl.style.height = `${30+(i*10)}px`
    boxesEl.append(divEl)
  }
}



function destroyBoxes() {
  const itemsEl = document.querySelectorAll(".item")
  
  itemsEl.forEach(el => el.remove())
}

createEl.addEventListener("click",createBoxes)
destroyEl.addEventListener("click", destroyBoxes)
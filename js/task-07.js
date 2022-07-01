const inputEl = document.querySelector("#font-size-control")
const textEl = document.querySelector("#text")

const onScrollChange = (evt) => {
    // console.log(inputEl.value)
     textEl.style.fontSize = `${inputEl.value}px`
     console.dir(textEl.style.fontSize);
}


inputEl.addEventListener("input", onScrollChange)


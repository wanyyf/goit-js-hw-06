const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

const onInputChange = (evt) => {
  console.log(evt.target.value);
  if (evt.target.value !== "") {
    outputEl.textContent = evt.target.value;
  } else {
    outputEl.textContent = "Anonymous";
  }
};

inputEl.addEventListener("input", onInputChange);
console.log(outputEl);

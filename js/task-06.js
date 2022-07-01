const inputEl = document.querySelector("#validation-input");
const inputDataValue = inputEl.dataset.length;

const onInputFocusLost = (evt) => {
  if (inputEl.value.length <= inputDataValue) {
    inputEl.classList.add("valid");
    return;
  } else {
    inputEl.classList.add("invalid");
    return;
  }
};

inputEl.addEventListener("blur", onInputFocusLost);

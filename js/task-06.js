const inputEl = document.querySelector("#validation-input");
const inputDataValue = inputEl.dataset.length;

const onInputFocusLost = (evt) => {
  
  if (inputEl.value.length <= inputDataValue) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    
  } else{ 
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
   
  
 
};

inputEl.addEventListener("blur", onInputFocusLost);

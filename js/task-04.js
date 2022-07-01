let counterValue = 0;
const btnMinusEl = document.querySelector('button[data-action="decrement"]');
const btnplusEl = document.querySelector('button[data-action="increment"]');
let valueEl = document.querySelector("#value");
const onBtnClickIncrement = (evt) => {
  console.log(evt);
  counterValue += 1;
  valueEl.textContent = counterValue;
};
const onBtnClickDecrement = (evt) => {
  console.log(evt);
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

btnplusEl.addEventListener("click", onBtnClickIncrement);
btnMinusEl.addEventListener("click", onBtnClickDecrement);

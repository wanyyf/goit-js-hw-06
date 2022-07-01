const listEl = document.querySelector("#categories");
const itemEl = document.querySelectorAll(".item");

console.log("Number of categories:" + listEl.children.length);
function secondTaskSolution() {
  return itemEl.forEach((element) => {
    console.log("Category:" + element.firstElementChild.textContent);
    console.log("Elements:" + element.lastElementChild.childElementCount);
  });
}

console.log(secondTaskSolution());

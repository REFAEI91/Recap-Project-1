console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const toggleMode = document.querySelector('[data-js="toggle-button"]');
toggleMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
let count = 0;
let counter = document.getElementById("counter");
counter.innerHTML = count;
function onClick() {
  count++;
  counter.innerHTML = count;
}

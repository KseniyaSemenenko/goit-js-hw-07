function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnEl = document.querySelector("button");
const spanEl = document.querySelector(".color")
btnEl.addEventListener("click", event => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  spanEl.textContent = newColor;
})

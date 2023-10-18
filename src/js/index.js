const buttons = document.querySelectorAll(".button");
const character = document.querySelectorAll(".character");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {

    buttonUnselect();
    characterUnselect();

    button.classList.add("selected");
    character[index].classList.add("selected");
  });
});

function characterUnselect() {
  const characterSelected = document.querySelector(".character.selected");
  characterSelected.classList.remove("selected");
}

function buttonUnselect() {
  const buttonSelected = document.querySelector(".button.selected");
  buttonSelected.classList.remove("selected");
}

let arr = [];
document.querySelector("form").onsubmit = submitHandler;

function render() {
  document.querySelector("ul").innerHTML = arr
    .map(item => `<li>${item}</li>`)
    .join("");
}

render();

function submitHandler(event) {
  event.preventDefault();

  let game = document.querySelector("input").value;
  arr.push(game);
  document.querySelector("input").value = "";
  render();
}

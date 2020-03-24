let result = 0;
let openingTime = 5;
let closingTime = 50;
let open = true;
// let time= new Date().getSeconds();
// console.log(result)
setInterval(() => {
  let time = new Date().getSeconds();
  let clock = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  //  console.clear();
  // console.log(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()} `)
  if (time >= openingTime && open && time <= closingTime) {
    document.body.innerHTML = `<div id="div"> WE ARE CLOSED AT THE MOMENT! </div><div id='div2'></div>`;
    document.getElementById("div2").innerHTML = clock;
    document.body.style = `background-color: black; color: white;`;

    open = false;
  } else if (!open && time > closingTime) {
    open = true;
    location.reload();
  }
}, 1000);

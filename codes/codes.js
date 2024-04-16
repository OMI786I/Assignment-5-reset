let array = [];

function getValue(btn) {
  const cal = btn.getAttribute("value");
  const seatCount = document.getElementById("seatCount");
  let remainingSeat = document.getElementById("remainingSeats");

  if (!btn.classList.contains("bg-[#1dd100]")) {
    btn.classList.add("bg-[#1dd100]");
    btn.classList.add("text-white");

    array.push(cal);
    console.log(array);
  } else {
    btn.classList.remove("bg-[#1dd100]");
    btn.classList.remove("text-white");
    const index = array.indexOf(cal);
    if (index !== -1) {
      array.splice(index, 1);
    }
    console.log(array);
  }

  seatCount.innerText = array.length;

  let seats = 40 - array.length;

  remainingSeat.innerText = seats;

  const container = document.getElementById("container");
  const div = document.createElement("div");
  div.classList.add("flex");
  div.classList.add("justify-between");
  const seat = document.createElement("h1");
  seat.textContent = cal;
  const classes = document.createElement("h1");
  classes.textContent = "Economy";
  const money = document.createElement("h1");
  money.textContent = 550;
  div.appendChild(seat);
  div.appendChild(classes);
  div.appendChild(money);
  container.appendChild(div);

  for (const iterator of array) {
  }
}

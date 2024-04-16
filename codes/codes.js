let array = [];

function getValue(btn) {
  const cal = btn.getAttribute("value");

  const seatCount = document.getElementById("seatCount");
  let remainingSeat = document.getElementById("remainingSeats");

  if (!btn.classList.contains("bg-[#1dd100]")) {
    btn.classList.add("bg-[#1dd100]");
    btn.classList.add("text-white");

    array.push(cal);

    const container = document.getElementById("container");
    const div = document.createElement("div");
    div.classList.add("flex");
    div.classList.add("justify-between");
    div.setAttribute("id", "id");
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
  } else {
    btn.classList.remove("bg-[#1dd100]");
    btn.classList.remove("text-white");
    const index = array.indexOf(cal);
    if (index !== -1) {
      array.splice(index, 1);
    }
    const elementRemove = document.getElementById("id");
    elementRemove.remove();
  }

  seatCount.innerText = array.length;

  let seats = 40 - array.length;

  remainingSeat.innerText = seats;

  let totalPrice = document.getElementById("totalPrice");
  totalPrice.innerText = array.length * 550;
}

setInterval(function nextBtn() {
  const nextBtn = document.getElementById("next");
  let phNumber = document.getElementById("phoneNumber").value;
  let phNumberArray = phNumber.split("");

  if (phNumberArray.length !== 0 && array.length !== 0) {
    nextBtn.removeAttribute("disabled");
  }
}, 10);

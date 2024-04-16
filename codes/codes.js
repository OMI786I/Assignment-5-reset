let array = [];

function getValue(btn) {
  if (array.length == 4) {
    return alert("4 seats selected!");
  }

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

  const coupon = document.getElementById("couponApply");
  if (array.length >= 4) {
    coupon.removeAttribute("disabled");
  } else {
    coupon.setAttribute("disabled", "");
  }
}

setInterval(function nextBtn() {
  const nextBtn = document.getElementById("next");
  let phNumber = document.getElementById("phoneNumber").value;
  let phNumberArray = phNumber.split("");

  if (phNumberArray.length !== 0 && array.length !== 0) {
    nextBtn.removeAttribute("disabled");
  }
}, 10);

function couponApply() {
  const applyBtn = document.getElementById("couponArea");
  const couponText = document.getElementById("couponText").value;
  const totalPrice = document.getElementById("totalPrice").innerText;
  const priceContainer = document.getElementById("priceContainer");
  const GrandPrice = document.getElementById("finalPrice");
  const div = document.createElement("div");
  const discounted0 = document.createElement("h1");
  discounted0.textContent = "discounted Price";
  div.appendChild(discounted0);
  div.classList.add("flex");
  div.classList.add("justify-between");
  priceContainer.appendChild(div);

  const couponTextSmall = couponText.toLowerCase();
  const fifteenDisc = "new15";
  const coupleDisc = "couple20";
  if (couponTextSmall === fifteenDisc) {
    const discounted = totalPrice * 0.15;
    const finalPrice = totalPrice - totalPrice * 0.15;
    GrandPrice.innerText = finalPrice;
    const discountedPrice = document.createElement("h1");
    discountedPrice.textContent = discounted;
    div.appendChild(discountedPrice);
    applyBtn.classList.add("hidden");
  }
  if (couponTextSmall === coupleDisc) {
    const discounted = totalPrice * 0.2;
    const finalPrice = totalPrice - totalPrice * 0.2;
    GrandPrice.innerText = finalPrice;
    const discountedPrice = document.createElement("h1");
    discountedPrice.textContent = discounted;
    div.appendChild(discountedPrice);
    applyBtn.classList.add("hidden");
  }
}

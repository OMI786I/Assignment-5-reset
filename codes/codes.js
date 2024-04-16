let array = [];

function getValue(btn) {
  const cal = btn.getAttribute("value");
  const seatCount = document.getElementById("seatCount");

  if (!btn.classList.contains("bg-[#1dd100]")) {
    btn.classList.add("bg-[#1dd100]");
    btn.classList.add("text-white");
    console.log(cal);
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
}

function getValue(btn) {
  const cal = btn.getAttribute("value");
  btn.classList.add("bg-[#1dd100]");
  btn.classList.add("text-white");

  console.log(cal);
}

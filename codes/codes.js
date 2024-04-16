function getValue(btn) {
  const cal = btn.getAttribute("value");

  if (!btn.classList.contains("bg-[#1dd100]")) {
    btn.classList.add("bg-[#1dd100]");
    btn.classList.add("text-white");
  } else {
    btn.classList.remove("bg-[#1dd100]");
    btn.classList.remove("text-white");
  }

  //console.clear();
  console.log(cal);
}

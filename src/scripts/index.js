const elCount = document.getElementById("count");
const elPlusBtn = document.getElementById("plus-btn");
const elMinusBtn = document.getElementById("minus-btn");
const elResetBtn = document.getElementById("reset-btn");

let count = 0;

const updateCount = (newCount) => {
  if (newCount < 0) return;

  count = newCount;
  elCount.innerHTML = count.toLocaleString();

  if (newCount % 33 === 0 && newCount !== 0) {
    document.body.classList.add("animate-wave");
    setTimeout(() => document.body.classList.remove("animate-wave"), 2000);
  }
};

elPlusBtn.addEventListener("click", (e) => {
  const y = e.pageY;
  const x = e.pageX;
  updateCount(count + 1);

  const elPlusSign = document.createElement("div");
  elPlusSign.innerHTML = "+1";
  elPlusSign.className = "plus-sign";
  document.body.append(elPlusSign);
  elPlusSign.style.top = `${y - 32}px`;
  elPlusSign.style.left = `${x - 10}px`;
  setTimeout(() => elPlusSign.remove(), 1000);
});

elResetBtn.addEventListener("click", () => updateCount(0));
elMinusBtn.addEventListener("click", () => updateCount(count - 1));

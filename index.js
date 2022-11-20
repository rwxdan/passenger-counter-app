let count = 0;
const counter = document.getElementById("count-el");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

const getCount = () => {
  increase.addEventListener("click", () => {
    count++;
    counter.textContent = count;
  });
  decrease.addEventListener("click", () => {
    count--;
    if (count < 0) {
      count = 0;
    }
    counter.textContent = count;
  });
};

getCount();

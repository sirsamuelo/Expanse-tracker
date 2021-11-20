const add = document.getElementById("add");
const close = document.getElementById("close");
const toggleContainer = document.querySelector(".toggle__container");
const topNav = document.querySelector(".top__nav");
const submitBtn = document.getElementById("submit");
const priceInput = document.querySelector(".price");
const description = document.querySelector(".description");

/* console.log(submitBtn);
console.log(priceInput);
console.log(description); */

add.addEventListener("click", () => {
  toggleContainer.classList.add("active");
  topNav.style.opacity = 0;
});

close.addEventListener("click", () => {
  toggleContainer.classList.remove("active");
  topNav.style.opacity = 1;
});

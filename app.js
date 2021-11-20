const add = document.getElementById("add");
const close = document.getElementById("close");
const form = document.getElementById("form");
const toggleContainer = document.querySelector(".toggle__container");
const topNav = document.querySelector(".top__nav");
const submitBtn = document.getElementById("submit");
const priceInput = document.querySelector(".price");
const description = document.querySelector(".description");
const dateElement = document.querySelector(".date");
const itemsPrice = document.querySelectorAll(".item");
const costElement = document.querySelector(".items__sum");
const parentToItems = document.querySelector(".body__items-flex");

let result = 0;
function addExpanses() {
  if (itemsPrice.length === 0) {
    return;
  }
  itemsPrice.forEach((item) => {
    result = result + parseFloat(item.children[2].innerText);
    console.log(result);
  });
  costElement.innerText = `${result}$`;
}

addExpanses();

//Event listeners
add.addEventListener("click", () => {
  toggleContainer.classList.add("active");
  topNav.style.opacity = 0;
});

close.addEventListener("click", () => {
  toggleContainer.classList.remove("active");
  topNav.style.opacity = 1;
});
form.addEventListener("submit", addItem);
//End of Event listeners

function addItem(e) {
  e.preventDefault();
  addExpanses();
  const newEl = document.createElement("div");
  newEl.classList.add("item");
  newEl.innerHTML = `
        <i class='bx bx-money'></i>
        <div class="item__name">${description.value}</div>
        <span>${priceInput.value}</span>
    `;
  parentToItems.appendChild(newEl);
  priceInput.value = "";
  description.value = "";
  addExpanses();
}

//Creating date and inserting it into DOM
const data = new Date();
function createDate() {
  const data = new Date();
  const day = data.getDate();
  const month = getMonthNow();
  const year = data.getFullYear();
  const fullDate = `${day} ${month} ${year}`;
  dateElement.innerText = fullDate;
}

//calling function
createDate();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//Getting correct month for displaying date
function getMonthNow() {
  const date = new Date();
  const month = date.getMonth();
  switch (month) {
    case 0:
      return "January";
      break;
    case 1:
      return "February";
      break;
    case 2:
      return "March";
      break;
    case 3:
      return "April";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "June";
      break;
    case 6:
      return "July";
      break;
    case 7:
      return "August";
      break;
    case 8:
      return "September";
      break;
    case 9:
      return "October";
      break;
    case 10:
      return "November";
      break;
      break;
    case 11:
      return "December";
      break;
    default:
      return "January";
  }
}

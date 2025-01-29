const month1 = document.querySelector("#month");
const day1 = document.querySelector("#day");
const date1 = document.querySelector("#date");
const year1 = document.querySelector("#year");

const date = new Date();
const month = date.getMonth();
month1.innerHTML = date.toLocaleString("en", {
    month: "long",
});

day1.innerHTML = date.toLocaleString("en", {
    weekday: "long",
});

date1.innerHTML = date.getDate();
year1.innerHTML = date.getFullYear();



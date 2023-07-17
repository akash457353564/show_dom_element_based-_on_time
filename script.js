const phone_el_nodes = document.querySelectorAll(".phone_el");
const phone_el_arr = Array.from(phone_el_nodes);

const date_now = new Date();
const hour_now = date_now.getHours();

console.log(hour_now);

if (hour_now >= 9 && hour_now <= 18) {
  phone_el_arr.forEach(function (el) {
    el.style.display = "flex";
  });
} else {
  phone_el_arr.forEach(function (el) {
    el.style.display = "none";
  });
}

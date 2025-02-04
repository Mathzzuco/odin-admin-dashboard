const bells = document.querySelector(".bells");
bells.addEventListener("click", changeIcon);

function changeIcon() {
  const ringBell = document.querySelector(".ring-notification-bell")
  const bell = document.querySelector(".notification-bell")
  if (bell.style.display === "none") {
    bell.style.display = "block";
    ringBell.style.display = "none";
  } else {
    bell.style.display = "none";
    ringBell.style.display = "block";
  }
}

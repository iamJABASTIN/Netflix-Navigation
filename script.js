const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navbars = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () => {
  navbars.forEach((navbar) => {
    navbar.classList.add("visible");
  });
});

closeBtn.addEventListener("click", () => {
  navbars.forEach((navbar) => {
    navbar.classList.remove("visible");
  });
});

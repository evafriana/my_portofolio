// Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navlinks");
const links = document.querySelectorAll(".navlinks li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((el) => {
        hamburger.checked = false;
        el.classList.remove("fade");
        el.classList.remove("active");
      });
      navLinks.classList.remove("open");
      link.classList.add("active");
    });
  });
});

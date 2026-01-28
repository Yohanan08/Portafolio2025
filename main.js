const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const mobileLinks = mobileMenu.getElementsByTagName("a");
for (let i = 0; i < mobileLinks.length; i++) {
  mobileLinks[i].addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
}

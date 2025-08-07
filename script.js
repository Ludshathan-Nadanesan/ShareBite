const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".nav-bar");

hamburgerMenu.addEventListener("click",()=>{
    navMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle("open");
    navBar.classList.toggle("active");
})
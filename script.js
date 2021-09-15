const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.nav');
let navLinks = document.querySelectorAll('.nav-links');


hamburger.addEventListener("click", menufunction);

function menufunction() {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
}

navLinks.forEach(function (navLink){
    navLink.addEventListener("click", closeMenu);
}) 

function closeMenu() {
    hamburger.classList.remove("active");
    navbar.classList.remove("active");
}



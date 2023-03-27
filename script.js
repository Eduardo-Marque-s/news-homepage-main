const navbar = document.querySelector("nav");
const openMenu = document.getElementById("menu");
const closeMenu = document.getElementById("close-button");

openMenu.addEventListener("click", () =>{
    navbar.classList.add("open")
});

closeMenu.addEventListener("click", () =>{
    navbar.classList.remove("open")
});






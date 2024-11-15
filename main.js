// script.js

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const curtainMenu = document.getElementById("curtain-menu");

    menuToggle.addEventListener("click", function () {
        curtainMenu.classList.toggle("active");
    });
});
// script.js

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const curtainMenu = document.getElementById("curtain-menu");
    const closeMenu = document.getElementById("close-menu");

    // Toggle menu on menu button click
    menuToggle.addEventListener("click", function() {
        curtainMenu.classList.toggle("active");
    });

    // Close menu on close button click
    closeMenu.addEventListener("click", function() {
        curtainMenu.classList.remove("active");
    });
});


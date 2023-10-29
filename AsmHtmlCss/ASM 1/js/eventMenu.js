
document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".fa-search");
    const searchForm = document.querySelector(".search-container");

    const menu = document.querySelector(".menu-click");
    const showMenu = document.querySelector(".menu-item");

    searchIcon.addEventListener("click", function () {
        searchForm.classList.toggle("active");

    });
    menu.addEventListener("click", function () {
        showMenu.classList.toggle("active");

    })
});
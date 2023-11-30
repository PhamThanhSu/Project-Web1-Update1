//Di chuyến chuột vào sẽ hiện ra div menu
// Laptop
var laptop = document.getElementById('laptop');
var menulaptop = document.getElementById('list-laptop');
var activebanner = document.getElementById('menu-active-tm');

laptop.addEventListener("mouseenter", function() {
        menulaptop.style.display = "block";
        activebanner.style.display="none";
});

menulaptop.addEventListener("mouseenter", function() {
    menulaptop.style.display = "block";
    activebanner.style.display="none";
});

laptop.addEventListener("mouseleave", function() {
    menulaptop.style.display="none"; 
    activebanner.style.display="block";
});

menulaptop.addEventListener("mouseleave", function() {
    menulaptop.style.display = "none";
    activebanner.style.display="block";
});

//Nhu cầu sử dụng
var nscd = document.getElementById('nscd');
var menunscd = document.getElementById('list-nhucausudung');
var activebanner = document.getElementById('menu-active-tm');

nscd.addEventListener("mouseenter", function() {
        menunscd.style.display = "block";
        activebanner.style.display="none";
});

menunscd.addEventListener("mouseenter", function() {
    menunscd.style.display = "block";
    activebanner.style.display="none";
});

nscd.addEventListener("mouseleave", function() {
    menunscd.style.display="none"; 
    activebanner.style.display="block";
});

menunscd.addEventListener("mouseleave", function() {
    menunscd.style.display = "none";
    activebanner.style.display="block";
});
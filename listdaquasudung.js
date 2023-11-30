//Di chuyến chuột vào sẽ hiện ra div menu
// Laptop
var daquasudung = document.getElementById('daquasudung');
var menudqsd = document.getElementById('list-daquasudung');
var activebanner = document.getElementById('menu-active-tm');

daquasudung.addEventListener("mouseenter", function() {
        menudqsd.style.display = "block";
        activebanner.style.display="none";
});

menudqsd.addEventListener("mouseenter", function() {
    menudqsd.style.display = "block";
    activebanner.style.display="none";
});

daquasudung.addEventListener("mouseleave", function() {
    menudqsd.style.display="none"; 
    activebanner.style.display="block";
});

menudqsd.addEventListener("mouseleave", function() {
    menudqsd.style.display = "none";
    activebanner.style.display="block";
});

//Nhu cầu sử dụng
var daquasudung = document.getElementById('daquasudung');
var menudqsd = document.getElementById('list-daquasudung');
var activebanner = document.getElementById('menu-active-tm');

daquasudung.addEventListener("mouseenter", function() {
        menudqsd.style.display = "block";
        activebanner.style.display="none";
});

menudqsd.addEventListener("mouseenter", function() {
    menudqsd.style.display = "block";
    activebanner.style.display="none";
});

daquasudung.addEventListener("mouseleave", function() {
    menudqsd.style.display="none"; 
    activebanner.style.display="block";
});

menudqsd.addEventListener("mouseleave", function() {
    menudqsd.style.display = "none";
    activebanner.style.display="block";
});
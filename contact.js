window.onscroll = function () {
    let navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};



const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarTogglerDemo02');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        bsCollapse.hide();
    });
});



var map = L.map('map', {
    scrollWheelZoom: false
}).setView([45.636446, 25.612130], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([45.636446, 25.612130]).addTo(map)
    .bindPopup('Scoala Generala Nr. 4')
    .openPopup();


var zoomMessage = document.createElement("div");
zoomMessage.innerText = "🖱️ Use Ctrl + Scroll to zoom the map";
zoomMessage.style.position = "absolute";
zoomMessage.style.bottom = "1px";
zoomMessage.style.right = "1px";
zoomMessage.style.background = "rgba(255, 255, 255, 2)";
zoomMessage.style.padding = "8px 12px";
zoomMessage.style.borderRadius = "5px";
zoomMessage.style.fontSize = "14px";
zoomMessage.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.2)";
zoomMessage.style.zIndex = "1000";
document.getElementById("map").appendChild(zoomMessage);


document.getElementById("map").addEventListener("wheel", function (event) {
    if (event.ctrlKey) {
        map.scrollWheelZoom.enable();
        event.preventDefault();
    } else {
        map.scrollWheelZoom.disable();
    }
}, { passive: false });


document.addEventListener("keyup", function (event) {
    if (event.key === "Control") {
        map.scrollWheelZoom.disable();
    }
});






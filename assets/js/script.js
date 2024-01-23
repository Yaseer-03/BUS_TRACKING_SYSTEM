'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const trackButton = document.getElementById('track-button');
  const bus = document.getElementById('bus');
  const routeSelect = document.getElementById('route');

  let notificationShown = false;

  function enableTrackButton() {
    trackButton.disabled = false;

    trackButton.addEventListener('click', function () {
      // Move the bus by adding a class or directly applying styles
      bus.classList.add('moving'); // Add a class for moving (see the CSS below)

      // 3) Redirect to the "Thank You" page after a delay
      setTimeout(function () {
        window.location.href = 'thankyou.html';
      }, 3000);
    });
  }

  function showLocationPrompt() {
    if (!notificationShown) {
      alert('To use the bus tracking system, please turn on your location services.');
      notificationShown = true;
    }
  }

  setTimeout(showLocationPrompt, 3000);

  if ('geolocation' in navigator) {
    function handleLocationPermission(position) {
      enableTrackButton();
    }

    navigator.geolocation.getCurrentPosition(handleLocationPermission);
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
});

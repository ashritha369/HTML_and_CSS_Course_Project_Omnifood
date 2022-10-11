///////////////////////////////////////////////
// adding current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Making mobile naviagtion-menu-icon work

const btnNavEl = document.querySelector(".btn-mobile-nav");

const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// scrolling
const allLinks = document.querySelectorAll("a:link");
// a:link will only selects anchor element that has href property.
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    //Scrollback to top

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // CLOSE MOBILE NAVIGATION: this works like : when in mobile navigation, upon clicking menu icon, and upon clicking any one link inside it, it will redirect to that section and closes the navigation menu once it has been scrolled to that clicked section.
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Smooth scrolling-on safari browser, add this below link in script tag inside index.html
// smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

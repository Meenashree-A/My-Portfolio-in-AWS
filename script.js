// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});
// Get elements
const modal1 = document.getElementById("hireMeModal");
const openModal1 = document.getElementById("openModal");
const closeModal1 = document.querySelector(".close");

// Open modal on button click
openModal1.addEventListener("click", () => {
  modal1.style.display = "block";
});

// Close modal when clicking "X"
closeModal1.addEventListener("click", () => {
  modal1.style.display = "none";
});

// Close modal when clicking outside the modal
window.addEventListener("click", (event) => {
  if (event.target === modal1) {
    modal1.style.display = "none";
  }
});
// Get elements
const modal = document.getElementById("requestServiceModal");
const openModalBtns = document.querySelectorAll(".request-service-btn");
const closeModal = document.querySelector(".close");
const serviceForm = document.getElementById("serviceForm");

// Open modal when clicking the button
openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

// Close modal when clicking "X"
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Handle form submission
serviceForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  
  // Get user input values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Simple validation
  if (name && email && message) {
    alert(`Thank you, ${name}! Your service request has been sent.`);
    modal.style.display = "none"; // Close modal after submission
    serviceForm.reset(); // Clear form fields
  } else {
    alert("Please fill in all fields.");
  }
});

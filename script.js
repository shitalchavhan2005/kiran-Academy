// =========================
// MOBILE MENU
// =========================

function toggleMenu() {

    const nav = document.querySelector("nav");

    nav.classList.toggle("active");

}


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelector("nav").classList.remove("active");

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    // Stop page from refreshing
    event.preventDefault();


    // Get form values

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const course = document.getElementById("course").value;

    const message = document.getElementById("message").value.trim();


    // Check required fields

    if (
        name === "" ||
        email === "" ||
        phone === "" ||
        course === "" ||
        message === ""
    ) {

        alert("Please fill all the fields.");

        return;

    }


    // Email validation

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }


    // Phone validation

    const phonePattern =
        /^[0-9]{10}$/;


    if (!phonePattern.test(phone)) {

        alert("Please enter a valid 10-digit phone number.");

        return;

    }


    // Success message

    alert(
        "Thank you, " +
        name +
        "! Your enquiry has been submitted successfully."
    );


    // Clear form

    contactForm.reset();

});
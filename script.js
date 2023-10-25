// hambuger icon

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("show-nav");
    });

   
    document.addEventListener("click", function(event) {
        if (!menuToggle.contains(event.target) && !nav.contains(event.target)) {
            nav.classList.remove("show-nav");
        }
    });
});

// JavaScript code to control the animation
const skillProgressBars = document.querySelectorAll(".skill-progress");

skillProgressBars.forEach(skillProgressBar => {
   
    if (window.innerWidth <= 600) {
        skillProgressBar.style.animation = "fill 4s forwards"; 
    } else {
        skillProgressBar.style.animation = "none"; 
    }
});




// script to validate form

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    contactForm.addEventListener("submit", function(event) {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === "") {
            isValid = false;
            alert("Name is required.");
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            isValid = false;
            alert("Please enter a valid email address.");
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            isValid = false;
            alert("Message is required.");
        }

        if (!isValid) {
            event.preventDefault(); 
        }
    });
});


// script to send message

document.addEventListener("DOMContentLoaded", function() {

    emailjs.init("YVAQDL-aKZq0UQ-SQ"); 

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;


        emailjs.send("service_hncxfg8", "template_xwpz9us", {
            sender_name: name,
            sender_email: email,
            subject: subject,
            message: message,
        })
        .then(function(response) {
            console.log("Email sent:", response);
            alert("Email sent successfully!");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(function(error) {
            console.error("Email send failed:", error);
            alert("Email send failed. Please try again later.");
        });
    });
});






document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Typing effect
    const text = "Front-End Software Developer";
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.querySelector(".home-content h1 span").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();

    // Form validation
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector("input[placeholder='Full Name']").value.trim();
        const email = document.querySelector("input[placeholder='Email']").value.trim();
        const message = document.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        alert("Message sent successfully!");
        this.reset();
    });
});

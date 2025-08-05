document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded Successfully!");

    // Apply smooth scrolling for navigation links
    document.querySelectorAll("nav a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            if (this.hash !== "") {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Form validation for the incident report page
    const reportForm = document.querySelector(".incident-form");
    if (reportForm) {
        reportForm.addEventListener("submit", function (event) {
            const name = document.getElementById("name").value.trim();
            const incidentType = document.getElementById("incident_type").value;
            const location = document.getElementById("location").value.trim();

            if (name === "" || incidentType === "" || location === "") {
                event.preventDefault();
                alert("Please fill in all fields before submitting!");
            }
        });
    }

    // Show confirmation animation on the confirmation page
    const confirmationMessage = document.getElementById("confirmation-message");
    if (confirmationMessage) {
        confirmationMessage.style.opacity = 0;
        setTimeout(() => {
            confirmationMessage.style.opacity = 1;
            confirmationMessage.style.transform = "translateY(0)";
        }, 300);
    }
});
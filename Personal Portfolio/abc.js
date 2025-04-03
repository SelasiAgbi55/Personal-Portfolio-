document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("submitButton").addEventListener("click", function (event) {
        event.preventDefault(); // Prevents form submission (optional)
        alert("Your message has been sent successfully!");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // When the form is submitted
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Get form field values
        let firstName = document.getElementById("firstName").value.trim();
        let lastName = document.getElementById("lastName").value.trim();
        let mobileNumber = document.getElementById("mobileNumber").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Validate if all fields are filled
        if (firstName === "" || lastName === "" || mobileNumber === "" || email === "" || message === "") {
            alert("Please fill in all fields before submitting.");
        } else {
            // Alert user that the message has been sent
            alert("Your message has been sent successfully!");

            // Reset the form
            document.getElementById("cont").reset();
        }
    });
});


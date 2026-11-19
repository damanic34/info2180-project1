/* Add your JavaScript to this file */
const form = document.querySelector("form");
const emailInput = document.querySelector('input[type="email"]');
const message = document.querySelector(".message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = emailInput.value.trim();

    if (email === "") {
        message.textContent = "Please enter a valid email address.";
    } else {
        message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
    }

});
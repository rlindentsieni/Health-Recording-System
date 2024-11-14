//https://console.firebase.google.com/u/0/project/khrs-project/database/khrs-project-default-rtdb/data/~2Fn

//Linking my html elements with javascript

const fnameFieldEl = document.getElementById("fname")

//const registerButtonEl = document.getElementById("register-button")
const backButtonEl = document.getElementById("back-button")

//registerButtonEl.addEventListener("click", function() {
  //  console.log("You have Succesfully been registered")
//})

document.getElementById("register-button").addEventListener("click", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Check if all required fields are filled
    const form = document.getElementById("registration-form");
    if (form.checkValidity()) {
        alert("You have successfully registered!");
        form.reset(); // Optional: Clear the form after successful registration
    } else {
        alert("Please fill in all required fields.");
    }
});
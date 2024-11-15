//https://console.firebase.google.com/u/0/project/khrs-project/database/khrs-project-default-rtdb/data/~2Fn

//Linking my html elements with javascript
//const registerButtonEl = document.getElementById("register-button")

//registerButtonEl.addEventListener("click", function() {
  //  console.log("You have Succesfully been registered")
//})


const backButtonEl = document.getElementById("back-button")
const form = document.getElementById("registration-form");



document.getElementById("register-button").addEventListener("click", function(event) {
    // Prevent the form from submitting
    event.preventDefault();

    // Check if all required fields are filled
    
    if (form.checkValidity()) {
        alert("You have successfully registered!");
        form.reset(); // Optional: Clear the form after successful registration
    } else {
        alert("Please fill in all required fields.");
    }
});

document.getElementById("register-button").addEventListener("click", function() {
    

    if (!firstName || !lastName || !dob || !dor || !tor) {
        alert("Please fill in the required fields.");
        return;
    }

    // Step 1: Get the first two letters of first and last names
    const firstTwoFirstName = firstName.slice(0, 2);
    const firstTwoLastName = lastName.slice(0, 2);

    // Step 2: Get the last two digits of the birth year
    const birthYear = new Date(dob).getFullYear();
    const lastTwoBirthYear = birthYear.toString().slice(-2);

    // Step 3: Combine Date of Registration and Time of Registration to get a timestamp
    const registrationDateTime = new Date(`${dor}T${tor}`);
    const registrationTimestamp = Math.floor(registrationDateTime.getTime() / 1000);

    // Concatenate to form the unique file number
    const patientFileNumber = firstTwoFirstName + firstTwoLastName + lastTwoBirthYear + registrationTimestamp;

    // Display the unique Patient File Number
    alert("Patient File Number: " + patientFileNumber);
});


 // Clear button functionality
 document.getElementById("clear-button").addEventListener("click", function() {
    const form = document.getElementById("registration-form");
    form.reset();
});

let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();

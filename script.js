









// Function to check if all required inputs are filled
function checkInputs() {
    // Get all input elements
    var inputs = document.querySelectorAll('input[required]');
    var filled = true;

    // Check if any required input is empty
    inputs.forEach(function(input) {
        if (input.value.trim() === '') {
            filled = false;
        }
    });

    return filled;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if all required inputs are filled
    var allFilled = checkInputs();

    // If all inputs are filled, show success message and redirect
    if (allFilled) {
        alert("Enrollment Submitted successfully");
        window.location.href = "Home.html"; // Redirect to Home.html
    } else {
        // If any required input is empty, alert the user
        alert("Please fill out all required fields before submitting.");
    }
}

// Add event listener for form submission
document.getElementById('submit').addEventListener('click', handleSubmit);
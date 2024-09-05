// Add an event listener to the form submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    // Simulate a delay to show the success message after 500ms
    setTimeout(function () {
        let isSuccess = true;

        if (isSuccess) {
            // Show success message
            document.getElementById('submitSuccessMessage').classList.remove('hidden');
            // Hide the submit button after the form is sent
            document.getElementById('submitMessage').classList.add('hidden');
        }

        // Hide success message and show the button again after 1.5 seconds
        setTimeout(function () {
            document.getElementById('submitSuccessMessage').classList.add('hidden');
            // Show the submit button again
            document.getElementById('submitMessage').classList.remove('hidden');
            
            // Reset the form fields
            document.querySelector('form').reset();
        }, 1500);// 1.5 seconds delay before hiding the message and resetting the form
    }, 500);// 500ms delay before showing success
});

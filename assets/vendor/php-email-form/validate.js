
  // Select the form element
  const form = document.querySelector('.php-email-form');

  // Select the message elements
  const loadingMessage = document.querySelector('.loading');
  const errorMessage = document.querySelector('.error-message');
  const successMessage = document.querySelector('.sent-message');

  // Function to show the loading message
  function showLoading() {
    loadingMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
  }

  // Function to show the error message
  function showError() {
    loadingMessage.style.display = 'none';
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
  }

  // Function to show the success message
  function showSuccess() {
    loadingMessage.style.display = 'none';
    errorMessage.style.display = 'none';
    successMessage.style.display = 'block';
  }

  // Function to handle the form submission
  function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission

    // Show the loading message
    showLoading();

    // Perform the form submission via AJAX
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData
    })
      .then(response => {
        if (response.ok) {
          // If the email was sent successfully, show the success message
          showSuccess();
        } else {
          // If there was an error sending the email, show the error message
          showError();
        }
      })
      .catch(error => {
        // If there was an error making the AJAX request, show the error message
        showError();
      });
  }

  // Add the form submission event listener
  form.addEventListener('submit', handleFormSubmission);
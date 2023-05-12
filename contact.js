// Get the form element
const form = document.querySelector('form');

// Get the form fields
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// Get the submit button
const submitButton = document.querySelector('button[type="submit"]');

// Add event listener to the form on submit
form.addEventListener('submit', (event) => {
  // Prevent default form submission behavior
  event.preventDefault();

  // Get the values of the form fields
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Validate form fields
  if (!name) {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (!email) {
    alert('Please enter your email.');
    emailInput.focus();
    return;
  }

  if (!message) {
    alert('Please enter a message.');
    messageInput.focus();
    return;
  }

  // Send form data to server
  const formData = new FormData(form);
  fetch('/submit-form', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        alert('Form submitted successfully!');
        form.reset();
        nameInput.focus();
      } else {
        alert('Error submitting form. Please try again later.');
      }
    })
    .catch((error) => {
      alert('Error submitting form. Please try again later.');
      console.error(error);
    });
});

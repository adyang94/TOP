const email = document.querySelector('#email');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#passwordConfirm');
const submit = document.querySelector('#submit');
const errorContainer = document.querySelector('#errorContainer');
const form = document.querySelector('#form');

// If you want to check validity after clicking out of the line, use the 'onfocusout' attribute.
function checkForm() {
  if (zip.value.length < 5) {
    alert('Zip code needs to be 5 characters.');
  }
}

form.addEventListener('click', (e) => {
  
  // Validity properties are very useful for JS to check forms.  The below console log is an example of the syntax of it.
  console.log(`${zip.validity.rangeOverflow}`);

  

  // Don't want the page to refresh
  if (!email.checkValidity()) {
    alert('ADD EMAIL');
    e.preventDefault()
  }
  
  
  e.preventDefault();
  
})

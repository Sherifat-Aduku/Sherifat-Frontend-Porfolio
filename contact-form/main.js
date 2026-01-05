const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', function(e){
    e.preventDefault();

    // Checks
    const fname = document.getElementById('fname').value.trim();
    const lname = document.getElementById('lname').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('msg').value.trim();
    const consent = document.getElementById('consent').checked;
    const queryType = document.querySelector('input[name="queryType"]:checked');

    if(!fname || !lname || !email || !msg || !consent || !queryType){
        successMessage.style.color = 'red';
        successMessage.textContent = 'Please complete all required fields.';
        return;
    }

    // Success message
    successMessage.style.color = 'green';
    successMessage.textContent = "Thanks for completing the form. We'll be in touch soon!";

    // Reset form
    contactForm.reset();
});

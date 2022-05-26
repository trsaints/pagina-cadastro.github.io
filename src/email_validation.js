function validateEmail(email) {
    let validationError = "Email inválido!";
    let userEmail = getValue(email, "string");
    let hasValidFormat = validEmail.test(userEmail);

    getInvalidPattern(!hasValidFormat, email, validationError);
}

function displayValidEmail() {
    return validateEmail(emailInput);
}

emailInput.addEventListener("change", displayValidEmail);
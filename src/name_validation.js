function validateName(name) {
    let validationError = "Nome inválido!"
    let userName = getValue(name, "string");
    let validName = onlyLetters.test(userName);

    getInvalidPattern(validName, name, validationError);
}

function displayValidName() {
    return validateName(nameInput);
}

nameInput.addEventListener("change", displayValidName)
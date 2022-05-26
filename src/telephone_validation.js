function validateTelephone(tel) {
    let validationError = "Telefone inválido!";
    let userTel = getValue(telephoneInput, "string");
    let validTel = hasLetter.test(userTel);
    let validTelLength = userTel.length !== 11;

    getInvalidPattern(validTel, tel, validationError);
}

function displayValidTel() {
    return validateTelephone(telephoneInput);
}

telephoneInput.addEventListener("change", displayValidTel)
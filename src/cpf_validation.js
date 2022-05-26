const invalidPatterns = ["11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"];


function validateCPF(cpf) {
    let validationError = "CPF inserido inválido!";
    let rawId = getValue(cpf, "string");
    let invalidId = hasLetter.test(rawId);
    let invalidLen = rawId.length !== 11;
    let invalidPattern = invalidPatterns.includes(rawId);

    getInvalidPattern(invalidId, cpf, validationError);
    getInvalidPattern(invalidLen, cpf, validationError);
    getInvalidPattern(invalidPattern, cpf, validationError)
}

function displayValidation() {
    return validateCPF(cpfInput);
}

cpfInput.addEventListener("change", displayValidation);


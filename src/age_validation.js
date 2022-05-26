function validateAge(birthdate) {
    let validationError = "Idade inválida!";
    let userBirthdate = birthdate.valueAsDate;
    let currentYear = new Date().getFullYear();
    let userBirthYear = userBirthdate.getFullYear();
    let userAge = currentYear - userBirthYear;
    let isAdult = userAge >= 18;

    console.log(userAge);
    getInvalidPattern(!isAdult, birthdate, validationError);
}

function displayValidAge() {
    return validateAge(birthdateInput);
}

birthdateInput.addEventListener("change", displayValidAge);
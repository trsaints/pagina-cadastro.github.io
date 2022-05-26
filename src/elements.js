const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const nameInput = document.querySelector("#user-name");
const telephoneInput = document.querySelector("#user-tel");
const cpfInput = document.querySelector("#user-id");
const emailInput = document.querySelector("#user-email");
const birthdateInput = document.querySelector("#user-birthdate");
const submitBtn = document.querySelector(".submit-btn");

const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const hasLetter = /[^\d]+/;
const onlyLetters = /[^a-zA-Z]+/;

inputs.forEach((input) => input.setAttribute("required", true));

function clearInput(input) {
    return input.value = "";
};

function getInvalidPattern(pattern, origin, message) {
    if (pattern) {
        clearInput(origin);
        console.error(message);
        return false;
    }
}

function getValue(input, type) {
    let inputValue = input.value;

    if (type === "string") {
        return inputValue;
    } else if (type === "number") {
        return Number(inputValue);
    } else {
        console.error("Entrada inválida! Tipo não foi especificado");
        return false;
    }
}

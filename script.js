let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let generated = document.getElementById("generated");
const copy = document.getElementById('copy');

const generatePassword = (len) => {
    const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`";

    const data = lowerAlphabet + upperAlphabet + numeric + symbol;
    let generator = '';
    for (let index = 0; index < len; index++) {
        generator += data[Math.floor(Math.random() * data.length)];
    }
    return generator;
}

const getPassword = () => {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    generated.innerText = "Password Generated!!";
    generated.classList = "text-primary text-center fw-bold";
}

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(password.value)
    generated.innerText = "Password copied!!";
    generated.classList = "text-primary text-center fw-bold";
}) 
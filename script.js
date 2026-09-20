const inputTamanho = document.querySelector("#tamanho");
const buttonElement = document.querySelector("#button");
const password = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");
const copyButton = document.querySelector("#copy-button");

const charset = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzÇç0123456789,.<>;:^~[]{}=+-()*&%$#@!/|";

let novaSenha = "";

function generatePasswords() {
    let tamanho = parseInt(inputTamanho.value);

    // Validação do tamanho
    if (isNaN(tamanho) || tamanho < 5) {
        tamanho = 5;
        inputTamanho.value = 5;
    } else if (tamanho > 50) {
        tamanho = 50;
        inputTamanho.value = 50;
    }

    let pass = "";
    for (let i = 0; i < tamanho; i++) {
        pass += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    containerPassword.classList.remove("hide");
    password.textContent = pass;
    novaSenha = pass;
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha)
        .then(() => {
            alert("Password successfully copied!");
        })
        .catch((err) => {
            alert("Failed to copy password!");
            console.error(err);
        });
}

buttonElement.addEventListener("click", generatePasswords);
copyButton.addEventListener("click", copyPassword);

// =========================================
// REFERÊNCIAS DO DOM
// =========================================
const inputTamanho      = document.querySelector("#tamanho");
const buttonElement     = document.querySelector("#button");
const password          = document.querySelector("#password");
const containerPassword = document.querySelector("#container-password");
const copyButton        = document.querySelector("#copy-button");
const tipoSenha         = document.querySelector("#tipo-senha");
const grupoTamanho      = document.querySelector("#grupo-tamanho");
const grupoCartao       = document.querySelector("#grupo-cartao");
const digitosCartao     = document.querySelector("#digitos-cartao");

// =========================================
// CHARSET E ESTADO
// =========================================
const charset =
    "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzÇç0123456789,.<>;:^~[]{}=+-()*&%$#@!/|";

let novaSenha = "";

// =========================================
// UTILITÁRIOS — SENHA GERAL
// =========================================

/**
 * Escolhe 3 índices de letras (0-25) que sejam:
 *  - distintos entre si (não repetidos)
 *  - não consecutivos no alfabeto (diferença != 1)
 */
function pickThreeLetterIndices() {
    const escolhidos = [];
    const usados = new Set();
    let tentativas = 0;

    while (escolhidos.length < 3 && tentativas < 1000) {
        tentativas++;
        const idx = Math.floor(Math.random() * 26);

        if (usados.has(idx)) continue;

        let conflito = false;
        for (const outro of usados) {
            if (Math.abs(outro - idx) === 1) {
                conflito = true;
                break;
            }
        }
        if (conflito) continue;

        usados.add(idx);
        escolhidos.push(idx);
    }

    return escolhidos;
}

/**
 * Gera uma senha geral com:
 *  - pelo menos 3 letras distintas, não consecutivas no alfabeto
 *  - pelo menos 1 dessas letras em maiúscula
 *  - restante preenchido com caracteres aleatórios do charset
 */
function generateGeneralPassword(tamanho) {
    const indices = pickThreeLetterIndices();

    const letras = indices.map((idx) => {
        const base = String.fromCharCode(97 + idx);
        return Math.random() < 0.5 ? base.toUpperCase() : base;
    });

    const temMaiuscula = letras.some((l) => l === l.toUpperCase());
    if (!temMaiuscula) {
        const i = Math.floor(Math.random() * letras.length);
        letras[i] = letras[i].toUpperCase();
    }

    const restante = Math.max(0, tamanho - 3);
    const outros = [];
    for (let i = 0; i < restante; i++) {
        outros.push(charset.charAt(Math.floor(Math.random() * charset.length)));
    }

    const todos = [...letras, ...outros];
    for (let i = todos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [todos[i], todos[j]] = [todos[j], todos[i]];
    }

    return todos.join("");
}

// =========================================
// UTILITÁRIOS — SENHA DE CARTÃO
// =========================================

/**
 * Gera uma senha de cartão (apenas dígitos).
 *
 * Regras:
 *  - 4 dígitos: TODOS os dígitos devem ser únicos (nenhum se repete).
 *  - 6 dígitos: cada dígito pode aparecer NO MÁXIMO 2 vezes, e as
 *               duas ocorrências NUNCA podem ser adjacentes.
 *  - Em ambos os casos: não pode haver dígitos consecutivos adjacentes
 *    (ex: 12, 21, 34, 43) nem dígitos iguais adjacentes (ex: 11, 22, 33).
 *
 * Exemplos INVÁLIDOS:
 *  - 4 dígitos: 2592 (2 repetido), 7464 (4 repetido), 1317 (1 repetido)
 *  - 6 dígitos: 225146 (2 adjacente), 153662 (6 adjacente), 112233 (adjacentes)
 *
 * Exemplos VÁLIDOS:
 *  - 4 dígitos: 2594, 7361, 8402
 *  - 6 dígitos: 251246 (2 aparece 2x, sem adjacência),
 *               351462 (6 aparece 2x, sem adjacência)
 */
function generateCardPassword(quantidade) {
    // Define o número máximo de vezes que um dígito pode aparecer
    const maxRepeticoes = quantidade === 4 ? 1 : 2;

    const digitos = [];
    const contagem = {};

    for (let i = 0; i < quantidade; i++) {
        const candidatos = [];

        for (let d = 0; d <= 9; d++) {
            // Regra 1: limite de repetição do dígito
            if ((contagem[d] || 0) >= maxRepeticoes) continue;

            if (digitos.length > 0) {
                const ultimo = digitos[digitos.length - 1];

                // Regra 2: não pode ser igual ao dígito anterior (adjacente)
                if (d === ultimo) continue;

                // Regra 3: não pode ser consecutivo (diferença de 1)
                if (Math.abs(d - ultimo) === 1) continue;
            }

            candidatos.push(d);
        }

        // Caminho sem saída: recomeça a geração do zero
        if (candidatos.length === 0) {
            return generateCardPassword(quantidade);
        }

        // Escolhe um candidato aleatório e registra
        const escolhido = candidatos[Math.floor(Math.random() * candidatos.length)];
        digitos.push(escolhido);
        contagem[escolhido] = (contagem[escolhido] || 0) + 1;
    }

    return digitos.join("");
}

// =========================================
// FLUXO PRINCIPAL
// =========================================

function generatePasswords() {
    let senha = "";

    if (tipoSenha.value === "cartao") {
        const quantidade = parseInt(digitosCartao.value, 10); // 4 ou 6
        senha = generateCardPassword(quantidade);
    } else {
        let tamanho = parseInt(inputTamanho.value, 10);

        if (isNaN(tamanho) || tamanho < 5) {
            tamanho = 5;
            inputTamanho.value = 5;
        } else if (tamanho > 50) {
            tamanho = 50;
            inputTamanho.value = 50;
        }

        senha = generateGeneralPassword(tamanho);
    }

    containerPassword.classList.remove("hide");
    password.textContent = senha;
    novaSenha = senha;
}

function copyPassword() {
    navigator.clipboard
        .writeText(novaSenha)
        .then(() => alert("Password successfully copied!"))
        .catch((err) => {
            alert("Failed to copy password!");
            console.error(err);
        });
}

function atualizarCamposPorTipo() {
    if (tipoSenha.value === "cartao") {
        grupoTamanho.classList.add("hide");
        grupoCartao.classList.remove("hide");
    } else {
        grupoCartao.classList.add("hide");
        grupoTamanho.classList.remove("hide");
    }

    containerPassword.classList.add("hide");
}

// =========================================
// EVENTOS
// =========================================
buttonElement.addEventListener("click", generatePasswords);
copyButton.addEventListener("click", copyPassword);
tipoSenha.addEventListener("change", atualizarCamposPorTipo);

atualizarCamposPorTipo();

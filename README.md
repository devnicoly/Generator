# Cute Password Generator

[ Português ](#português) | [ English ](#english)

---

<a name="português"></a>
## Português

Projeto pessoal desenvolvido com HTML, CSS e JavaScript que gera senhas aleatórias e seguras. O usuário pode escolher entre dois tipos de senha — senha geral ou senha de cartão — definir o comprimento (ou a quantidade de dígitos) e copiar o resultado para a área de transferência com um clique.

---

### Funcionalidades

- Geração de senhas aleatórias com tamanho configurável (de 5 a 50 caracteres).
- Dois tipos de senha:
  - **Senha geral**: mistura de letras maiúsculas, minúsculas, números, símbolos e caracteres acentuados.
  - **Senha de cartão**: apenas dígitos numéricos, com 4 ou 6 dígitos.
- Regras de segurança aplicadas automaticamente:
  - Toda senha geral contém pelo menos 3 letras distintas entre si, não consecutivas no alfabeto, sendo pelo menos uma delas maiúscula.
  - Senhas de cartão de 4 dígitos não repetem nenhum número.
  - Senhas de cartão de 6 dígitos permitem no máximo 2 ocorrências do mesmo número, nunca adjacentes.
  - Senhas de cartão nunca contêm dígitos iguais ou consecutivos lado a lado.
- Validação automática dos limites do comprimento.
- Botão para gerar uma nova senha a cada clique.
- Botão "Copy" que aparece abaixo da senha com uma animação suave após a senha ser gerada.
- Cópia da senha para a área de transferência com um clique.
- Feedback visual de sucesso ao copiar a senha.
- Layout moderno com paleta em tons de rosa, cantos arredondados, sombras suaves e blobs decorativos difusos.
- Interface responsiva para desktop e dispositivos móveis.

---

### Estrutura do projeto

O projeto é composto pelos seguintes arquivos:

- **index.html**: Estrutura da página, contendo o título principal, o subtítulo, o seletor de tipo de senha, o campo de comprimento, o seletor de dígitos do cartão, o botão de gerar, a área de exibição da senha e o botão de copiar.
- **style.css**: Estilização da interface, incluindo paleta em tons de rosa, layout, animações e efeitos de hover.
- **script.js**: Lógica de geração das senhas (geral e de cartão), validação e cópia para a área de transferência.

---

### Como funciona

1. O usuário escolhe o **tipo de senha** no seletor superior:
   - **General password** (senha geral)
   - **Card password** (senha de cartão)
2. Dependendo da escolha, o formulário se adapta:
   - Para **senha geral**: aparece o campo **Length** (comprimento entre 5 e 50).
   - Para **senha de cartão**: aparece o seletor **Digits** com as opções **4** ou **6**.
3. Ao clicar em **Generate**, o programa:
   - Se for senha geral: garante 3 letras distintas, não consecutivas, com pelo menos uma maiúscula, e completa o restante com caracteres aleatórios. Em seguida embaralha tudo.
   - Se for senha de cartão: gera apenas números, respeitando as regras de não repetição e não sequência.
   - Exibe o resultado na tela.
4. O botão **Copy** aparece abaixo da senha com uma animação suave.
5. Ao clicar em **Copy**, a senha é copiada para a área de transferência e uma mensagem de sucesso é exibida.

---

### Regras das senhas

#### Senha geral

- Mínimo de 5 caracteres e máximo de 50.
- Pelo menos 3 letras distintas entre si.
- Essas 3 letras não podem ser consecutivas no alfabeto (ex: `a` e `b` nunca aparecem juntas entre as obrigatórias).
- Pelo menos uma dessas letras deve ser maiúscula.
- O restante do comprimento é preenchido com caracteres aleatórios do conjunto disponível (letras, números, símbolos e acentos).

#### Senha de cartão

- Apenas dígitos numéricos.
- Pode ter 4 ou 6 dígitos.
- Regras aplicadas em ambos os casos:
  - Nenhum dígito pode ser consecutivo ao anterior (ex: `12`, `21`, `34`, `43`).
  - Nenhum dígito pode ser igual ao anterior (ex: `11`, `22`, `33`).
- Regras específicas para 4 dígitos:
  - Todos os dígitos devem ser únicos (ex: `2594`, `7361`).
  - Não podem haver repetições (ex: `2592`, `7464`, `1317` são inválidos).
- Regras específicas para 6 dígitos:
  - Cada dígito pode aparecer no máximo 2 vezes.
  - As duas ocorrências do mesmo dígito nunca podem estar lado a lado.
  - Exemplos válidos: `251246`, `351462`, `904268`.
  - Exemplos inválidos: `225146`, `153662`, `112233`.

---

### Como executar

#### Pré-requisitos

- Um navegador web (Chrome, Firefox, Edge, etc.).
- Não é necessário instalar nada.

#### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/devnicoly/Generator.git
```

2. Entre na pasta do projeto:

```bash
cd Generator
```

3. Abra o arquivo `index.html` no navegador:

- Dê um duplo clique no arquivo, ou
- Clique com o botão direito e escolha "Abrir com" > seu navegador.

Pronto! O gerador de senhas estará funcionando.

---

### Exemplo de uso

#### Senha geral

1. Selecione **General password** no tipo de senha.
2. Digite **20** no campo de comprimento.
3. Clique em **Generate**.
4. A senha gerada aparece na tela, por exemplo:

```
Kj#8pL@2wQ!zR5tY7mX
```

5. Clique em **Copy** para copiá-la.

#### Senha de cartão

1. Selecione **Card password** no tipo de senha.
2. Escolha **4 digits** ou **6 digits**.
3. Clique em **Generate**.
4. A senha gerada aparece na tela, por exemplo:

```
4827
```

5. Clique em **Copy** para copiá-la.

---

### Explicação do código

#### index.html

Contém a estrutura visual:

- Um `h1` com o título "CUTE PASSWORD GENERATOR".
- Um `h2` com o subtítulo explicando o funcionamento do gerador.
- Um seletor `select` com id `tipo-senha` para escolher entre senha geral e senha de cartão.
- Um grupo de campos `#grupo-tamanho` com `label` e `input` do tipo `number` para o comprimento (valor padrão 12, limites de 5 a 50).
- Um grupo de campos `#grupo-cartao` com `label` e `select` com id `digitos-cartao` para escolher 4 ou 6 dígitos.
- Um `button` com id `button` que chama a função `generatePasswords()`.
- Um `div` que exibe a senha gerada.
- Um `button` "Copy" com id `copy-button` que chama a função `copyPassword()`.

#### style.css

Responsável pela aparência:

- Fundo em gradiente suave em tons de rosa (`#fdf2f8` a `#fbcfe8`).
- Dois blobs decorativos difusos posicionados nos cantos da tela.
- Cards brancos com cantos arredondados, sombras suaves em tom rosa e bordas delicadas.
- Título principal com gradiente em texto (`#ec4899` a `#be185d`) usando `background-clip: text`.
- Fonte Poppins importada do Google Fonts.
- Campos de entrada com borda rosa clara, fundo em tom rosado e foco com `box-shadow` rosa.
- Botão principal com gradiente rosa, sombra colorida e elevação no hover.
- Área da senha com fundo rosa claro, borda tracejada rosa e fonte monoespaçada.
- Botão "Copy" em estilo outline rosa, invertendo as cores no hover.
- Animação suave de aparecimento do card de resultado.
- Layout responsivo para telas menores.

#### script.js

Contém a lógica principal:

- Seleciona os elementos da página com `querySelector`.
- Define o `charset` com todos os caracteres possíveis.
- A função `pickThreeLetterIndices()`:
  - Escolhe 3 índices de letras distintos entre si.
  - Garante que não sejam consecutivos no alfabeto.
- A função `generateGeneralPassword(tamanho)`:
  - Gera 3 letras com base nos índices escolhidos.
  - Garante pelo menos uma letra maiúscula.
  - Completa o restante do tamanho com caracteres aleatórios.
  - Embaralha o resultado com o algoritmo Fisher-Yates.
- A função `generateCardPassword(quantidade)`:
  - Gera dígitos um a um, filtrando apenas os candidatos válidos.
  - Aplica as regras de não repetição e não sequência.
  - Aplica o limite de repetições (1 para 4 dígitos, 2 para 6 dígitos).
  - Reinicia a geração caso chegue a um caminho sem saída.
- A função `generatePasswords()`:
  - Lê o tipo de senha escolhido.
  - Chama a função correta com os parâmetros adequados.
  - Exibe a senha e remove a classe `hide`.
- A função `copyPassword()`:
  - Copia a senha para a área de transferência usando `navigator.clipboard`.
  - Exibe um alerta de confirmação.
- A função `atualizarCamposPorTipo()`:
  - Alterna os campos visíveis conforme o tipo de senha escolhido.
  - Esconde o resultado anterior ao trocar de tipo.

---

### Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts (Poppins)

---

### Autora

Desenvolvido por Nicoly Alves dos Santos.

LinkedIn: https://www.linkedin.com/in/devnicoly  
GitHub: https://github.com/devnicoly

---

### Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, estudar e modificar.

---

<a name="english"></a>
## English

Personal project developed with HTML, CSS, and JavaScript that generates random and secure passwords. The user can choose between two types of password — general password or card password — set the length (or number of digits), and copy the result to the clipboard with a single click.

---

### Features

- Random password generation with configurable length (from 5 to 50 characters).
- Two password types:
  - **General password**: mix of uppercase letters, lowercase letters, numbers, symbols, and accented characters.
  - **Card password**: numeric digits only, with 4 or 6 digits.
- Security rules applied automatically:
  - Every general password contains at least 3 distinct letters, not consecutive in the alphabet, with at least one of them uppercase.
  - Card passwords with 4 digits do not repeat any number.
  - Card passwords with 6 digits allow at most 2 occurrences of the same number, never adjacent.
  - Card passwords never contain identical or consecutive digits side by side.
- Automatic validation of length limits.
- Button to generate a new password on each click.
- "Copy" button that appears below the password with a smooth animation after the password is generated.
- Copy the password to the clipboard with a single click.
- Visual success feedback when copying the password.
- Modern layout with a pink color palette, rounded corners, soft shadows, and diffused decorative blobs.
- Responsive interface for desktop and mobile devices.

---

### Project structure

The project consists of the following files:

- **index.html**: Page structure, containing the main title, the subtitle, the password type selector, the length input field, the card digits selector, the generate button, the password display area, and the copy button.
- **style.css**: Interface styling, including the pink palette, layout, animations, and hover effects.
- **script.js**: Password generation logic (general and card), validation, and clipboard copy.

---

### How it works

1. The user chooses the **password type** in the top selector:
   - **General password**
   - **Card password**
2. Depending on the choice, the form adapts:
   - For **general password**: the **Length** field appears (between 5 and 50).
   - For **card password**: the **Digits** selector appears with options **4** or **6**.
3. When clicking **Generate**, the program:
   - If it is a general password: guarantees 3 distinct, non-consecutive letters, with at least one uppercase, and fills the rest with random characters. Then it shuffles everything.
   - If it is a card password: generates only numbers, respecting the no-repetition and no-sequence rules.
   - Displays the result on the screen.
4. The **Copy** button appears below the password with a smooth animation.
5. When clicking **Copy**, the password is copied to the clipboard and a success message is shown.

---

### Password rules

#### General password

- Minimum of 5 characters and maximum of 50.
- At least 3 distinct letters.
- These 3 letters cannot be consecutive in the alphabet (e.g., `a` and `b` never appear together among the mandatory ones).
- At least one of these letters must be uppercase.
- The rest of the length is filled with random characters from the available set (letters, numbers, symbols, and accents).

#### Card password

- Numeric digits only.
- Can have 4 or 6 digits.
- Rules applied in both cases:
  - No digit can be consecutive to the previous one (e.g., `12`, `21`, `34`, `43`).
  - No digit can be equal to the previous one (e.g., `11`, `22`, `33`).
- Specific rules for 4 digits:
  - All digits must be unique (e.g., `2594`, `7361`).
  - No repetitions allowed (e.g., `2592`, `7464`, `1317` are invalid).
- Specific rules for 6 digits:
  - Each digit may appear at most 2 times.
  - The two occurrences of the same digit can never be side by side.
  - Valid examples: `251246`, `351462`, `904268`.
  - Invalid examples: `225146`, `153662`, `112233`.

---

### How to run

#### Requirements

- A web browser (Chrome, Firefox, Edge, etc.).
- No installation needed.

#### Step by step

1. Clone the repository:

```bash
git clone https://github.com/devnicoly/Generator.git
```

2. Enter the project folder:

```bash
cd Generator
```

3. Open the `index.html` file in your browser:

- Double-click the file, or
- Right-click and choose "Open with" > your browser.

Done! The password generator will be working.

---

### Usage example

#### General password

1. Select **General password** as the type.
2. Type **20** in the length field.
3. Click **Generate**.
4. The generated password appears on the screen, for example:

```
Kj#8pL@2wQ!zR5tY7mX
```

5. Click **Copy** to copy it.

#### Card password

1. Select **Card password** as the type.
2. Choose **4 digits** or **6 digits**.
3. Click **Generate**.
4. The generated password appears on the screen, for example:

```
4827
```

5. Click **Copy** to copy it.

---

### Code explanation

#### index.html

Contains the visual structure:

- An `h1` with the title "CUTE PASSWORD GENERATOR".
- An `h2` with the subtitle explaining how the generator works.
- A `select` with id `tipo-senha` to choose between general and card password.
- A group of fields `#grupo-tamanho` with `label` and `input` of type `number` for the length (default value 12, limits from 5 to 50).
- A group of fields `#grupo-cartao` with `label` and `select` with id `digitos-cartao` to choose 4 or 6 digits.
- A `button` with id `button` that calls the `generatePasswords()` function.
- A `div` that displays the generated password.
- A "Copy" `button` with id `copy-button` that calls the `copyPassword()` function.

#### style.css

Responsible for the appearance:

- Gradient background in pink tones (`#fdf2f8` to `#fbcfe8`).
- Two diffused decorative blobs positioned at the corners of the screen.
- White cards with rounded corners, soft pink shadows, and delicate borders.
- Main title with a text gradient (`#ec4899` to `#be185d`) using `background-clip: text`.
- Poppins font imported from Google Fonts.
- Input fields with light pink border, pinkish background, and focus with pink `box-shadow`.
- Main button with pink gradient, colored shadow, and hover elevation.
- Password area with light pink background, pink dashed border, and monospaced font.
- "Copy" button in pink outline style, inverting the colors on hover.
- Smooth appearance animation of the result card.
- Responsive layout for smaller screens.

#### script.js

Contains the main logic:

- Selects page elements with `querySelector`.
- Defines the `charset` with all possible characters.
- The `pickThreeLetterIndices()` function:
  - Picks 3 letter indices that are distinct from each other.
  - Ensures they are not consecutive in the alphabet.
- The `generateGeneralPassword(tamanho)` function:
  - Generates 3 letters based on the chosen indices.
  - Ensures at least one letter is uppercase.
  - Fills the rest of the length with random characters.
  - Shuffles the result using the Fisher-Yates algorithm.
- The `generateCardPassword(quantidade)` function:
  - Generates digits one by one, filtering only valid candidates.
  - Applies the no-repetition and no-sequence rules.
  - Applies the repetition limit (1 for 4 digits, 2 for 6 digits).
  - Restarts the generation if it reaches a dead end.
- The `generatePasswords()` function:
  - Reads the chosen password type.
  - Calls the correct function with the appropriate parameters.
  - Displays the password and removes the `hide` class.
- The `copyPassword()` function:
  - Copies the password to the clipboard using `navigator.clipboard`.
  - Displays a confirmation alert.
- The `atualizarCamposPorTipo()` function:
  - Toggles the visible fields according to the chosen password type.
  - Hides the previous result when switching types.

---

### Technologies used

- HTML5
- CSS3
- JavaScript
- Google Fonts (Poppins)

---

### Author

Developed by Nicoly Alves dos Santos.

LinkedIn: https://www.linkedin.com/in/devnicoly  
GitHub: https://github.com/devnicoly

---

### License

This project is licensed under the MIT License. Feel free to use, study, and modify it.

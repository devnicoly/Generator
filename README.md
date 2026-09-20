# Generator

[ Português ](#português) | [ English ](#english)

---

<a name="português"></a>
## Português

Projeto pessoal desenvolvido com HTML, CSS e JavaScript que gera senhas aleatórias e seguras. O usuário pode escolher o comprimento da senha digitando um número e copiá-la para a área de transferência com um clique.

---

### Funcionalidades

- Geração de senhas aleatórias com tamanho configurável (de 5 a 50 caracteres).
- Campo de digitação para escolher o comprimento da senha, com validação automática dos limites.
- Uso de um conjunto variado de caracteres: letras maiúsculas, minúsculas, números, símbolos e caracteres acentuados.
- Botão para gerar uma nova senha a cada clique.
- Botão "Copy" que aparece abaixo da senha com uma animação suave de crescimento após a senha ser gerada.
- Cópia da senha para a área de transferência com um clique.
- Feedback visual de sucesso ao copiar a senha.
- Layout com tema escuro, em tons de azul-escuro e cinza.

---

### Estrutura do projeto

O projeto é composto pelos seguintes arquivos:

- **index.html**: Estrutura da página, contendo o título principal, o subtítulo, o campo de digitação do comprimento, o botão de gerar, a área de exibição da senha e o botão de copiar.
- **style.css**: Estilização da interface, incluindo cores, layout, animações e efeitos de hover.
- **script.js**: Lógica de geração da senha, validação do tamanho e cópia para a área de transferência.

---

### Como funciona

1. O usuário digita o comprimento desejado da senha (entre 5 e 50 caracteres) no campo de entrada.
2. Se o valor digitado for menor que 5, o programa ajusta automaticamente para 5. Se for maior que 50, ajusta para 50.
3. Ao clicar no botão **Generate**, o programa:
   - Percorre o `charset` (conjunto de caracteres disponíveis).
   - Sorteia caracteres aleatórios até atingir o tamanho escolhido.
   - Exibe a senha na tela.
4. O botão **Copy** aparece abaixo da senha com uma animação suave de crescimento.
5. Ao clicar em **Copy**, a senha é copiada para a área de transferência e um alerta de sucesso é mostrado.

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

1. Digite **20** no campo de comprimento.
2. Clique em **Generate**.
3. A senha gerada aparece na tela, por exemplo:

```
Kj#8pL@2wQ!zR5tY7mX
```

4. Clique em **Copy** para copiá-la.

---

### Explicação do código

#### index.html

Contém a estrutura visual:

- Um `h1` com o título "PASSWORD GENERATOR".
- Um `h2` com o subtítulo explicando o funcionamento do gerador.
- Um `label` e um `input` do tipo `number` para escolher o comprimento da senha (com valor padrão 5 e limites de 5 a 50).
- Um `button` com id `button` que chama a função `generatePasswords()`.
- Um `div` que exibe a senha gerada.
- Um `button` "Copy" com id `copy-button` que chama a função `copyPassword()`.

#### style.css

Responsável pela aparência:

- Tema escuro com fundo `#0e0f18` e detalhes em azul-escuro e cinza.
- Fonte Poppins importada do Google Fonts.
- Título principal em maiúsculas, com letras espaçadas e cor `#3e6186`.
- Subtítulo (`h2`) com cor `#2a63a0` e tamanho próprio.
- Campo numérico e botões com fundo `#2e3a42` e texto `#83a6ca`.
- Efeitos de transição e `scale` ao passar o mouse.
- Animação suave de crescimento do botão "Copy" ao aparecer.
- Classe `.hide` usada para esconder a senha até que ela seja gerada.

#### script.js

Contém a lógica principal:

- Seleciona os elementos da página com `querySelector`.
- Define o `charset` com todos os caracteres possíveis.
- A função `generatePasswords()`:
  - Lê o valor digitado no campo numérico.
  - Valida os limites (mínimo 5, máximo 50).
  - Cria uma senha aleatória com base no tamanho escolhido.
  - Exibe a senha e remove a classe `hide`.
- A função `copyPassword()`:
  - Copia a senha para a área de transferência usando `navigator.clipboard`.
  - Exibe um alerta de confirmação.

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

Personal project developed with HTML, CSS, and JavaScript that generates random and secure passwords. The user can choose the password length by typing a number and copy it to the clipboard with a single click.

---

### Features

- Random password generation with configurable length (from 5 to 50 characters).
- Input field to choose the password length, with automatic limit validation.
- Uses a wide set of characters: uppercase letters, lowercase letters, numbers, symbols, and accented characters.
- Button to generate a new password on each click.
- "Copy" button that appears below the password with a smooth growing animation after the password is generated.
- Copy the password to the clipboard with a single click.
- Visual success feedback when copying the password.
- Dark theme layout, in shades of dark blue and gray.

---

### Project structure

The project consists of the following files:

- **index.html**: Page structure, containing the main title, the subtitle, the length input field, the generate button, the password display area, and the copy button.
- **style.css**: Interface styling, including colors, layout, animations, and hover effects.
- **script.js**: Password generation logic, length validation, and clipboard copy.

---

### How it works

1. The user types the desired password length (between 5 and 50 characters) in the input field.
2. If the value is less than 5, the program automatically adjusts it to 5. If it is greater than 50, it adjusts to 50.
3. When clicking the **Generate** button, the program:
   - Goes through the `charset` (set of available characters).
   - Picks random characters until reaching the chosen length.
   - Displays the password on the screen.
4. The **Copy** button appears below the password with a smooth growing animation.
5. When clicking **Copy**, the password is copied to the clipboard and a success alert is shown.

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

1. Type **20** in the length field.
2. Click **Generate**.
3. The generated password appears on the screen, for example:

```
Kj#8pL@2wQ!zR5tY7mX
```

4. Click **Copy** to copy it.

---

### Code explanation

#### index.html

Contains the visual structure:

- An `h1` with the title "PASSWORD GENERATOR".
- An `h2` with the subtitle explaining how the generator works.
- A `label` and an `input` of type `number` to choose the password length (with default value 5 and limits from 5 to 50).
- A `button` with id `button` that calls the `generatePasswords()` function.
- A `div` that displays the generated password.
- A "Copy" `button` with id `copy-button` that calls the `copyPassword()` function.

#### style.css

Responsible for the appearance:

- Dark theme with background `#0e0f18` and details in dark blue and gray.
- Poppins font imported from Google Fonts.
- Main title in uppercase, with letter spacing and color `#3e6186`.
- Subtitle (`h2`) with color `#2a63a0` and its own size.
- Number input and buttons with background `#2e3a42` and text `#83a6ca`.
- Transition and `scale` effects on hover.
- Smooth growing animation of the "Copy" button when it appears.
- `.hide` class used to hide the password until it is generated.

#### script.js

Contains the main logic:

- Selects page elements with `querySelector`.
- Defines the `charset` with all possible characters.
- The `generatePasswords()` function:
  - Reads the value typed in the number input.
  - Validates the limits (minimum 5, maximum 50).
  - Creates a random password based on the chosen length.
  - Displays the password and removes the `hide` class.
- The `copyPassword()` function:
  - Copies the password to the clipboard using `navigator.clipboard`.
  - Displays a confirmation alert.

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

# Generator

[ Português ](#português) | [ English ](#english)

---

<a name="português"></a>
## Português

Projeto pessoal desenvolvido com HTML, CSS e JavaScript que gera senhas aleatórias e seguras. O usuário pode escolher o comprimento da senha através de um slider e copiá-la para a área de transferência com um clique.

---

### Funcionalidades

- Geração de senhas aleatórias com tamanho configurável (de 5 a 50 caracteres).
- Exibição do tamanho escolhido em tempo real conforme o slider é movido.
- Uso de um conjunto variado de caracteres: letras maiúsculas, minúsculas, números, símbolos e caracteres acentuados.
- Botão para gerar uma nova senha a cada clique.
- Cópia automática da senha para a área de transferência ao clicar na senha exibida.
- Feedback visual com tooltip "Copy" ao passar o mouse sobre a senha.

---

### Estrutura do projeto

O projeto é composto pelos seguintes arquivos:

- **index.html**: Estrutura da página, contendo o logo, o slider de comprimento, o botão de gerar e a área de exibição da senha.
- **style.css**: Estilização da interface, incluindo cores, layout, animações e efeitos de hover.
- **script.js**: Lógica de geração da senha, atualização do slider e cópia para a área de transferência.
- **assets/**: Pasta com as imagens utilizadas no projeto (como o logo).

---

### Como funciona

1. O usuário ajusta o **slider** para escolher o comprimento desejado da senha (entre 5 e 50 caracteres).
2. O valor é exibido em tempo real ao lado do texto "Length".
3. Ao clicar no botão **Generate**, o programa:
   - Percorre o `charset` (conjunto de caracteres disponíveis).
   - Sorteia caracteres aleatórios até atingir o tamanho escolhido.
   - Exibe a senha na tela.
4. Ao clicar na senha exibida, ela é **copiada** para a área de transferência e um alerta de sucesso é mostrado.

---

### Como executar

#### Pré-requisitos

- Um navegador web (Chrome, Firefox, Edge, etc.).
- Não é necessário instalar nada.

#### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/Generator.git
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

1. Mova o slider para **20**.
2. Clique em **Generate**.
3. A senha gerada aparece na tela, por exemplo:

```
Kj#8pL@2wQ!zR5tY7mX
```

4. Clique na senha para copiá-la.

---

### Explicação do código

#### index.html

Contém a estrutura visual:

- Um `img` com o logo.
- Um `input` do tipo `range` (slider) para escolher o comprimento.
- Um `button` que chama a função `generatePasswords()`.
- Um `div` que exibe a senha gerada e permite copiá-la ao clicar.

#### style.css

Responsável pela aparência:

- Fundo azul claro e layout centralizado com Flexbox.
- Estilização do slider e do botão com efeitos de transição.
- Tooltip "Copy" que aparece ao passar o mouse sobre a senha.
- Classe `.hide` usada para esconder a senha até que ela seja gerada.

#### script.js

Contém a lógica principal:

- Seleciona os elementos da página com `querySelector`.
- Define o `charset` com todos os caracteres possíveis.
- A função `generatePasswords()`:
  - Cria uma senha aleatória com base no tamanho do slider.
  - Exibe a senha e remove a classe `hide`.
- A função `copyPassword()`:
  - Copia a senha para a área de transferência usando `navigator.clipboard`.
  - Exibe um alerta de confirmação.

---

### Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript

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

Personal project developed with HTML, CSS, and JavaScript that generates random and secure passwords. The user can choose the password length using a slider and copy it to the clipboard with a single click.

---

### Features

- Random password generation with configurable length (from 5 to 50 characters).
- Real-time display of the selected length as the slider moves.
- Uses a wide set of characters: uppercase letters, lowercase letters, numbers, symbols, and accented characters.
- Button to generate a new password on each click.
- Automatic copy of the password to the clipboard when clicking on the displayed password.
- Visual feedback with a "Copy" tooltip when hovering over the password.

---

### Project structure

The project consists of the following files:

- **index.html**: Page structure, containing the logo, the length slider, the generate button, and the password display area.
- **style.css**: Interface styling, including colors, layout, animations, and hover effects.
- **script.js**: Password generation logic, slider update, and clipboard copy.
- **assets/**: Folder with the images used in the project (such as the logo).

---

### How it works

1. The user adjusts the **slider** to choose the desired password length (between 5 and 50 characters).
2. The value is displayed in real time next to the "Length" text.
3. When clicking the **Generate** button, the program:
   - Goes through the `charset` (set of available characters).
   - Picks random characters until reaching the chosen length.
   - Displays the password on the screen.
4. When clicking the displayed password, it is **copied** to the clipboard and a success alert is shown.

---

### How to run

#### Requirements

- A web browser (Chrome, Firefox, Edge, etc.).
- No installation needed.

#### Step by step

1. Clone the repository:

```bash
git clone https://github.com/seu-usuario/Generator.git
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

1. Move the slider to **20**.
2. Click **Generate**.
3. The generated password appears on the screen, for example:

```
Kj#8pL@2wQ!zR5tY7mX
```

4. Click the password to copy it.

---

### Code explanation

#### index.html

Contains the visual structure:

- An `img` with the logo.
- An `input` of type `range` (slider) to choose the length.
- A `button` that calls the `generatePasswords()` function.
- A `div` that displays the generated password and allows copying it on click.

#### style.css

Responsible for the appearance:

- Light blue background and centered layout using Flexbox.
- Slider and button styling with transition effects.
- "Copy" tooltip that appears when hovering over the password.
- `.hide` class used to hide the password until it is generated.

#### script.js

Contains the main logic:

- Selects page elements with `querySelector`.
- Defines the `charset` with all possible characters.
- The `generatePasswords()` function:
  - Creates a random password based on the slider length.
  - Displays the password and removes the `hide` class.
- The `copyPassword()` function:
  - Copies the password to the clipboard using `navigator.clipboard`.
  - Displays a confirmation alert.

---

### Technologies used

- HTML5
- CSS3
- JavaScript

---

### Author

Developed by Nicoly Alves dos Santos.

LinkedIn: https://www.linkedin.com/in/devnicoly  
GitHub: https://github.com/devnicoly

---

### License

This project is licensed under the MIT License. Feel free to use, study, and modify it.

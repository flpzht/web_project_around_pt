# Around The U.S. 🗺️

Projeto de estudo de HTML, CSS e JavaScript para iniciantes.

## Sobre o Projeto

"Around The U.S." é uma página interativa onde os usuários podem visualizar, adicionar, curtir e remover cartões de fotos de lugares dos Estados Unidos. O projeto começou como uma página estática e foi evoluindo até se tornar uma aplicação web interativa com manipulação do DOM.

<img src="images/project_around_model-page.png">

## Funcionalidades

- Visualizar cartões de fotos gerados dinamicamente com JavaScript
- Curtir cartões (o ícone de coração muda de cor ao clicar)
- Deletar cartões da página
- Adicionar novos cartões com nome e link de imagem via pop-up
- Editar as informações de perfil (nome e descrição) via pop-up
- Ampliar a imagem ao clicar nela, abrindo um modal

## Tecnologias Utilizadas

- HTML5
- CSS3 (metodologia BEM)
- JavaScript (manipulação do DOM)

## O que é BEM?

BEM (Block, Element, Modifier) é uma forma de organizar os nomes das classes no CSS para deixar o código mais fácil de entender e manter. O padrão segue assim:

- **Block** (Bloco): componente independente → `.card`
- **Element** (Elemento): parte de um bloco → `.card__title`
- **Modifier** (Modificador): variação ou estado → `.card__like-button_is-active`

## Estrutura de Pastas

```
web_project_around_pt/
├── index.html
├── pages/
│   └── index.css           # Importa todos os estilos dos blocos
├── blocks/                 # Arquivos CSS separados por componente (BEM)
│   ├── card.css
│   ├── profile.css
│   ├── popup.css
│   └── ...
├── images/                 # Imagens do projeto (logo, avatar, ícones)
│   └── placeholder.jpg
├── scripts/
│   └── index.js            # Toda a lógica JavaScript do projeto
├── vendor/                 # Arquivos de terceiros (fontes, normalize.css)
│   └── normalize.css
└── README.md
```

## Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/flpzht/web_project_around_pt.git
```
2. Abra o arquivo `index.html` no navegador.

Não é necessário instalar nada!

## 🔗 Link do Projeto

🌐 **[Ver Demo Online](https://flpzht.github.io/web_project_around_pt/)**


## Autor

Felipe Carvalho — [@flpzht](https://github.com/flpzht)
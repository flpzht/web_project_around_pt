# Around The U.S.

Uma aplicação web front-end interativa para exploração e compartilhamento de fotos de lugares dos Estados Unidos. O projeto foi desenvolvido em etapas como parte de um estudo prático de desenvolvimento web com HTML, CSS e JavaScript puro (Vanilla JS), sem o uso de frameworks ou bibliotecas externas.

## Demo

🌐 **[Ver Demo Online](https://flpzht.github.io/web_project_around_pt/)**

## Visão Geral

O projeto partiu de uma página 100% estática, e evoluiu até uma aplicação dinâmica e interativa. O desafio central foi implementar toda a camada de comportamento com JavaScript, praticando os principais conceitos de manipulação do DOM.

<img src="images/project_around_model-page.png">

### Funcionalidades implementadas

- Renderização dinâmica de cartões a partir de um array de objetos via `<template>` HTML
- Adição de novos cartões por meio de formulário em modal, com inserção no topo da lista
- Exclusão de cartões diretamente do DOM
- Sistema de curtidas com alternância de estado visual via toggle de classe CSS
- Visualização ampliada de imagens em modal com legenda dinâmica
- Edição de informações de perfil (nome e descrição) com pré-preenchimento dos campos
- Funções reutilizáveis `openModal()` e `closeModal()` para controle de todos os pop-ups
- Parâmetros padrão nas funções para tratamento de dados incompletos

## Tecnologias e Conceitos

| Tecnologia / Conceito | Aplicação no Projeto |
|---|---|
| HTML5 semântico | Estrutura de página com `<header>`, `<main>`, `<footer>`, `<section>`, `<template>` |
| CSS3 + BEM | Estilização modular com nomenclatura Block__Element--Modifier |
| JavaScript ES6+ | Manipulação do DOM, eventos, funções, parâmetros padrão, `forEach`, `cloneNode` |
| `<template>` HTML | Geração eficiente de elementos repetidos sem hardcode no HTML |
| Event Delegation | Listeners configurados dentro da factory function `getCardElement()` |
| `evt.preventDefault()` | Controle do comportamento padrão de formulários |

## Metodologia BEM

Os estilos seguem a metodologia **BEM (Block, Element, Modifier)**, com arquivos CSS separados por bloco dentro da pasta `blocks/`, todos importados centralmente em `pages/index.css`.

```
.card                         → Bloco
.card__image                  → Elemento
.card__like-button_is-active  → Modificador (estado ativo do like)
.popup_is-opened              → Modificador (controla visibilidade do modal)
```

Essa abordagem garante escalabilidade, reuso de estilos e facilidade de manutenção.

## Arquitetura do JavaScript

O arquivo `scripts/index.js` foi organizado com separação de responsabilidades:

- **Seleção de elementos DOM** no nível superior do arquivo
- **`getCardElement(name, link)`** — factory function que clona o template, popula os dados e registra todos os event listeners do cartão
- **`renderCard(name, link, container)`** — insere o cartão gerado no container via `prepend()`
- **`openModal(modal)` / `closeModal(modal)`** — funções reutilizáveis para gerenciar todos os modais
- **`fillProfileForm()`** — pré-popula os campos do formulário com os dados atuais do perfil
- **`handleProfileFormSubmit(evt)`** / **`handleAddCardFormSubmit(evt)`** — handlers de formulário com `preventDefault()`

## Estrutura de Pastas

```
web_project_around_pt/
├── index.html                  # Estrutura principal da página e templates
├── pages/
│   └── index.css               # Ponto de entrada dos estilos (importa todos os blocos)
├── blocks/                     # Estilos CSS por componente (metodologia BEM)
│   ├── card.css
│   ├── profile.css
│   ├── popup.css
│   ├── header.css
│   ├── footer.css
│   └── ...
├── images/                     # Assets visuais (logo, avatar, placeholder)
│   └── placeholder.jpg
├── scripts/
│   └── index.js                # Toda a lógica de interatividade da aplicação
├── vendor/                     # Dependências externas (normalize.css, fontes)
│   └── normalize.css
└── README.md
```

## Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/flpzht/web_project_around_pt.git

# Acesse a pasta
cd web_project_around_pt

# Abra no navegador
open index.html
# ou simplesmente arraste o arquivo index.html para o navegador
```

Não há dependências, build steps ou instalação necessária.

## Próximos Passos

O projeto cobre apenas o front-end. Para que os dados (curtidas, novos cartões, edições de perfil) persistam entre sessões, a aplicação precisaria ser integrada a uma API REST — o próximo passo natural no desenvolvimento full-stack.

## Autor

**Felipe Carvalho**
GitHub: [@flpzht](https://github.com/flpzht)

# 🚀 Sistema de Gerenciamento de Usuários — SPA em Vue.js 3

Projeto prático desenvolvido durante a disciplina de **Linguagens de Programação III (ILP3)** no curso de **Informática para Negócios** da **FATEC São Bernardo do Campo (FATEC SBC)**.

O objetivo deste repositório é documentar a evolução prática na construção de uma **Single Page Application (SPA)** completa, aplicando padrões de arquitetura front-end de mercado, componentização, gerenciamento de estado global e consumo de APIs REST.

---

## 🛠️ Tecnologias Utilizadas

* **Vue.js 3** (Options API & Composition API `setup`)
* **Vite** (Build tool e servidor de desenvolvimento rápido)
* **Vue Router 4** (Roteamento dinâmico e navegação SPA)
* **Pinia** (Gerenciamento de estado global centralizado)
* **Axios** (Cliente HTTP para consumo de API REST)
* **JavaScript (ES6+)**, **HTML5** e **CSS3 Scoped**
* **IDE:** JetBrains IntelliJ IDEA

---

## 📂 Arquitetura do Projeto (Padrão de Mercado)

```text
src/
├── components/       # Componentes visuais reutilizáveis (UI)
│   ├── UserForm.vue  # Formulário reativo para criação e edição
│   └── UserTable.vue # Tabela de exibição e disparo de ações
├── views/            # Páginas completas conectadas às rotas
│   ├── HomeView.vue
│   ├── UsersView.vue
│   └── UserDetailView.vue
├── stores/           # Estado global e regras de negócio (Pinia)
│   └── userStore.vue / userStore.js
├── services/         # Configuração de comunicação externa (Axios)
│   └── api.js
├── router/           # Configuração central de rotas (Vue Router)
│   └── index.js
├── App.vue           # Layout base da aplicação
└── main.js           # Ponto de entrada e registro de plugins
```markdown
# Bella Massa 🍕

**Bella Massa** é um projeto front-end completo e funcional para uma pizzaria. Ele foi construído com Vue.js e utiliza um `json-server` para simular um backend, permitindo uma experiência de ponta a ponta, desde a escolha dos sabores até o recebimento do pedido em uma tela de administração.

## ✨ Funcionalidades

O projeto é dividido em três visualizações principais:

-   **Página Inicial (`HomeView.vue`)**: Uma landing page atraente com informações sobre a pizzaria, uma seção com os sabores em destaque (Margherita, Calabresa e Quatro Queijos), e um formulário de contato.
-   **Página de Pedidos (`MakeOrderView.vue`)**: Onde os clientes podem ver o cardápio completo, adicionar pizzas ao carrinho e finalizar a compra. Inclui um sistema de carrinho de compras em modal e notificações de sucesso ao enviar o pedido.
-   **Visualização de Pedidos (`OrdersView.vue`)**: Uma tela de administração simples que exibe todos os pedidos recebidos do `json-server`. Os pedidos podem ser marcados como concluídos (excluídos da visualização).

## 🚀 Tecnologias Utilizadas

-   **Vue.js (v3)**: Framework principal para a construção da interface.
-   **Vite**: Ferramenta de build e servidor de desenvolvimento rápido.
-   **Vue Router**: Para gerenciamento de rotas do lado do cliente.
-   **Tailwind CSS**: Para estilização rápida e responsiva.
-   **JSON Server**: Para simular uma API RESTful e persistir os dados dos pedidos, buscando-os em `http://localhost:3000/pedidos`.
-   **Vue Toastification**: Para exibir notificações (toasts) amigáveis ao usuário, como "Pedido enviado!".

## 🔧 Instalação e Execução

Para rodar o projeto localmente, você precisará ter o **Node.js** instalado. Siga os passos abaixo.

### 1. Instalação das Dependências

Clone o repositório e execute o seguinte comando no terminal para instalar todas as dependências do projeto listadas no `package.json`:

npm install

### 2. Execução do Projeto

Para uma experiência completa, você precisa iniciar tanto o **servidor de backend (json-server)** quanto o **servidor de desenvolvimento (Vite)**. Abra dois terminais e execute os comandos:

**No primeiro terminal, inicie o backend:**
Este comando irá iniciar o `json-server`, que ficará observando o arquivo `db/db.json` para servir os dados dos pedidos.

```sh
npm run backend
```

**No segundo terminal, inicie o frontend:**
Este comando irá iniciar o servidor de desenvolvimento do Vite, tornando a aplicação acessível.

```sh
npm run dev
```

Agora você pode abrir o navegador e acessar a aplicação!

## 📜 Scripts Disponíveis

-   `npm run dev`: Inicia o servidor de desenvolvimento do Vite.
-   `npm run build`: Compila e minifica o projeto para produção.
-   `npm run preview`: Inicia um servidor local para visualizar os arquivos de produção.
-   `npm run backend`: Inicia o `json-server` para simular a API de pedidos.
```

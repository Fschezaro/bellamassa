<script setup>
</script>

<template>
  <main>
  <div class="container">
    <h1>🍕 Pizzaria Bella Massa</h1>
    <p>A pizza perfeita está a um clique de distância!</p>
      <RouterLink class="botao-pedido" to="/makeorder">Faça um pedido</RouterLink>
  </div>
  </main>
</template>
<style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-image: url('https://images.unsplash.com/photo-1601924579960-2ac99caa0111'); /* imagem de pizza */
      background-size: cover;
      background-position: center;
      height: 100vh;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      backdrop-filter: brightness(0.6);
    }

    .container {
      background-color: rgba(0, 0, 0, 0.6);
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 0 20px rgba(0,0,0,0.4);
    }

    h1 {
      font-size: 3em;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2em;
      margin-bottom: 30px;
    }

    .botao-pedido {
      padding: 15px 30px;
      font-size: 1.2em;
      font-weight: bold;
      background-color: #ff4500;
      color: white;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.2s ease;
      text-decoration: none;
    }

    .botao-pedido:hover {
      background-color: #e63e00;
      transform: scale(1.05);
    }
  </style>

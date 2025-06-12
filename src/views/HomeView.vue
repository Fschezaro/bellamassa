<script setup>
</script>

<template>
  <main class="bg-gradient-to-br from-yellow-100 via-red-100 to-red-200 min-h-screen flex flex-col">
  <!-- Header -->
  <header class="bg-white/90 shadow sticky top-0 z-20">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
      <div class="flex items-center space-x-2">
        <span class="text-2xl font-extrabold text-red-700">🍕 Bella Massa</span>
      </div>
      <nav class="space-x-6 hidden md:block">
        <a href="#sabores" class="font-medium text-red-700 hover:text-red-900 transition">Sabores</a>
        <a href="#contato" class="font-medium text-red-700 hover:text-red-900 transition">Contato</a>
        <a href="#pedido" class="font-medium bg-red-600 text-white px-4 py-2 rounded-xl shadow hover:bg-red-700 transition">Peça Agora</a>
      </nav>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="flex-1 flex items-center justify-center py-16" id="pedido">
    <div class="max-w-3xl text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-red-800 mb-4">A melhor pizza da cidade!</h1>
      <p class="text-xl md:text-2xl text-red-600 mb-8">Sabor autêntico, massa leve, ingredientes frescos.<br>
        Peça agora e receba em minutos!</p>
      <a href="#sabores" class="inline-block bg-red-600 text-white font-bold px-8 py-3 m-8 rounded-full shadow-lg text-lg hover:bg-red-700 transition">
        Ver Sabores
      </a>
    </div>
  </section>

  <!-- Sabores Section -->
  <section id="sabores" class="py-16 bg-white/70">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-red-800 text-center mb-10">Nossos Sabores</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <img src="../assets/img/margarita.jpg" alt="Pizza Margherita" class="w-32 h-32 rounded-full mb-4 object-cover shadow">
          <h3 class="text-xl font-semibold text-red-700 mb-2">Margherita</h3>
          <p class="text-gray-600 text-center mb-3">Mussarela, molho de tomate artesanal, manjericão fresco e um toque de azeite de oliva.</p>
          <span class="font-bold text-red-800 text-lg">R$ 39,90</span>
        </div>
        <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <img src="../assets/img/calabresa.jpg" alt="Pizza Calabresa" class="w-32 h-32 rounded-full mb-4 object-cover shadow">
          <h3 class="text-xl font-semibold text-red-700 mb-2">Calabresa</h3>
          <p class="text-gray-600 text-center mb-3">Calabresa especial, cebola roxa, mussarela, orégano e molho da casa.</p>
          <span class="font-bold text-red-800 text-lg">R$ 44,90</span>
        </div>
        <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <img src="../assets/img/4queijos.jpg" alt="Pizza Quatro Queijos" class="w-32 h-32 rounded-full mb-4 object-cover shadow">
          <h3 class="text-xl font-semibold text-red-700 mb-2">Quatro Queijos</h3>
          <p class="text-gray-600 text-center mb-3">Mussarela, gorgonzola, parmesão e catupiry sobre massa fina crocante.</p>
          <span class="font-bold text-red-800 text-lg">R$ 47,90</span>
        </div>
      </div>
      <div class="text-center mt-12">
        <RouterLink class="bg-red-600 text-white px-8 py-3 rounded-full shadow-lg font-bold text-lg hover:bg-red-700 transition" to="/makeorder">          Quero pedir!</RouterLink>
      </div>
    </div>
  </section>

  <!-- Contato Section -->
  <section id="contato" class="py-16">
    <div class="container mx-auto px-4 max-w-xl">
      <h2 class="text-3xl font-bold text-red-800 text-center mb-8">Fale Conosco</h2>
      <form class="bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div>
          <label class="block font-semibold text-red-700 mb-2" for="nome">Nome</label>
          <input class="w-full border border-red-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" type="text" id="nome" placeholder="Seu nome" required>
        </div>
        <div>
          <label class="block font-semibold text-red-700 mb-2" for="email">E-mail</label>
          <input class="w-full border border-red-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" type="email" id="email" placeholder="Seu e-mail" required>
        </div>
        <div>
          <label class="block font-semibold text-red-700 mb-2" for="mensagem">Mensagem</label>
          <textarea class="w-full border border-red-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400" id="mensagem" rows="4" placeholder="Como podemos ajudar?"></textarea>
        </div>
        <button type="submit" class="w-full bg-red-600 text-white py-3 rounded-xl font-bold hover:bg-red-700 transition">Enviar Mensagem</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-red-700 text-white text-center py-4 mt-auto">
    <span class="font-medium">© 2025 Bella Massa Pizzaria | Feito com ♥ em sua cidade</span>
  </footer>
  </main>
</template>

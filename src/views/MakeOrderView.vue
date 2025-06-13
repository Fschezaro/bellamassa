<template>
<header class="bg-white/90 shadow sticky top-0 z-20">
    <div class="container mx-auto flex justify-between items-center py-4 px-6">
        <div class="flex items-center space-x-2">
            <span class="text-2xl font-extrabold text-red-700">Bella Massa</span>
        </div>
        <div class="flex items-center space-x-6">
            <nav class="hidden md:block">
                <RouterLink class="font-medium text-red-700 hover:text-red-900 transition" to="/">Início</RouterLink>
            </nav>
            <a href="#" class="font-medium bg-red-600 text-white px-4 py-2 rounded-xl shadow hover:bg-red-700 transition" @click.prevent="cartOpen = true">Carrinho</a>
        </div>
    </div>
  </header>

  <!-- Sabores Section -->
  <main id="sabores" class="py-16 flex-1">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-red-800 text-center mb-10">Escolha sua pizza</h2>
      <div class="grid md:grid-cols-3 gap-8">

        <!-- Pizza 1 -->
        <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <img src="../assets/img/margarita.jpg" alt="Pizza Margherita" class="w-32 h-32 rounded-full mb-4 object-cover shadow">
          <h3 class="text-xl font-semibold text-red-700 mb-2">Margherita</h3>
          <p class="text-gray-600 text-center mb-3">Mussarela, molho de tomate artesanal, manjericão fresco e azeite de oliva.</p>
          <span class="font-bold text-red-800 text-lg mb-4">R$ 39,90</span>
          <button class="bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-red-700 transition w-full mt-auto"  @click="addToCart('Margherita', 39.90)">Adicionar ao carrinho</button>
        </div>
        <!-- Pizza 2 -->
        <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <img src="../assets/img/calabresa.jpg" alt="Pizza Calabresa" class="w-32 h-32 rounded-full mb-4 object-cover shadow">
          <h3 class="text-xl font-semibold text-red-700 mb-2">Calabresa</h3>
          <p class="text-gray-600 text-center mb-3">Calabresa especial, cebola roxa, mussarela, orégano e molho da casa.</p>
          <span class="font-bold text-red-800 text-lg mb-4">R$ 44,90</span>
          <button class="bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-red-700 transition w-full mt-auto"  @click="addToCart('Calabresa', 44.90)">Adicionar ao carrinho</button>
        </div>
        <!-- Pizza 3 -->
        <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <img src="../assets/img/4queijos.jpg" alt="Pizza Quatro Queijos" class="w-32 h-32 rounded-full mb-4 object-cover shadow">
          <h3 class="text-xl font-semibold text-red-700 mb-2">Quatro Queijos</h3>
          <p class="text-gray-600 text-center mb-3">Mussarela, gorgonzola, parmesão e catupiry sobre massa fina crocante.</p>
          <span class="font-bold text-red-800 text-lg mb-4">R$ 47,90</span>
          <button class="bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-red-700 transition w-full mt-auto"  @click="addToCart('Quatro Queijos', 47.90)">Adicionar ao carrinho</button>
        </div>
        <!-- Pizza 4 -->
        <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <img src="../assets/img/portuguesa.jpg" alt="Pizza Portuguesa" class="w-32 h-32 rounded-full mb-4 object-cover shadow">
          <h3 class="text-xl font-semibold text-red-700 mb-2">Portuguesa</h3>
          <p class="text-gray-600 text-center mb-3">Presunto, ovos, cebola, azeitonas, mussarela, ervilha e orégano.</p>
          <span class="font-bold text-red-800 text-lg mb-4">R$ 48,90</span>
          <button class="bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-red-700 transition w-full mt-auto" @click="addToCart('Portuguesa', 48.90)">Adicionar ao carrinho</button>
        </div>
        <!-- Pizza 5 -->
        <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <img src="../assets/img/frango com catupiry.jpg" alt="Pizza Frango com Catupiry" class="w-32 h-32 rounded-full mb-4 object-cover shadow">
          <h3 class="text-xl font-semibold text-red-700 mb-2">Frango com Catupiry</h3>
          <p class="text-gray-600 text-center mb-3">Frango desfiado, catupiry, milho, mussarela e molho artesanal.</p>
          <span class="font-bold text-red-800 text-lg mb-4">R$ 46,90</span>
          <button class="bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-red-700 transition w-full mt-auto" @click="addToCart('Frango c/ Cat', 46.90)">Adicionar ao carrinho</button>
        </div>
        <!-- Pizza 6 -->
        <div class="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <img src="../assets/img/vegetariana.jpg" alt="Pizza Vegetariana" class="w-32 h-32 rounded-full mb-4 object-cover shadow">
          <h3 class="text-xl font-semibold text-red-700 mb-2">Vegetariana</h3>
          <p class="text-gray-600 text-center mb-3">Abobrinha, berinjela, tomate, cebola, pimentão, mussarela e orégano.</p>
          <span class="font-bold text-red-800 text-lg mb-4">R$ 43,90</span>
          <button class="bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow hover:bg-red-700 transition w-full mt-auto" @click="addToCart('Vegetariana', 43.90)">Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  </main>
  <!-- Footer -->
  <footer class="bg-red-700 text-white text-center py-4 mt-auto">
    <span class="font-medium">© 2025 Bella Massa Pizzaria | Feito com ♥ em sua cidade</span>
  </footer>

<ModalCart :open="cartOpen" :cart="cart" @close="cartOpen = false" @remove="removeFromCart"/>

</template>
<script setup>
import { ref } from 'vue'
import ModalCart from '@/components/ModalCart.vue'

// Defina os produtos (use o mesmo nome do botão para evitar erros)
const produtos = [
  { name: "Margherita", price: 39.90 },
  { name: "Calabresa", price: 44.90 },
  { name: "Quatro Queijos", price: 47.90 },
  { name: "Portuguesa", price: 48.90 },
  { name: "Frango c/ Cat.", price: 46.90 },
  { name: "Vegetariana", price: 43.90 },
]

const cartOpen = ref(false)
const cart = ref([])

// Função para adicionar ao carrinho
function addToCart(name, price) {
  const found = cart.value.find(item => item.name === name)
  if (found) {
    found.qty += 1
  } else {
    cart.value.push({ name, price, qty: 1 })
  }
}

// Função para remover do carrinho
function removeFromCart(index) {
  cart.value.splice(index, 1)
}
</script>

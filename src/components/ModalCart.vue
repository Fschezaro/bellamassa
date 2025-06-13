<template>
  <div v-if="open" class="fixed inset-0 bg-black/40 z-30 flex items-center justify-center" @click.self="close">
    <div class="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md relative">
      <button
  class="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-red-700 text-xl bg-red-100 hover:bg-red-200 transition shadow"
  @click="close"
>
  &times;
</button>
      <h2 class="text-2xl font-bold text-red-800 mb-6 text-center">Seu Carrinho</h2>
      <div v-if="cart.length === 0" class="text-gray-500 text-center">Seu carrinho está vazio.</div>
      <div v-else>
        <ul>
          <li v-for="(item, i) in cart" :key="item.name" class="flex items-center justify-between mb-4">
            <div class="font-semibold">{{ item.name }}</div>
            <div class="flex items-center">
              <div class="flex items-center space-x-2 mt-1">
                <button class="w-8 h-8 rounded-full flex items-center justify-center bg-red-100 text-red-700 hover:bg-red-200" @click="changeQty(i, -1)" aria-label="Diminuir quantidade">−</button>
                <span class="px-2">{{ item.qty }}</span>
                <button class="w-8 h-8 rounded-full flex items-center justify-center bg-red-100 text-red-700 hover:bg-red-200" @click="changeQty(i, 1)" aria-label="Aumentar quantidade">+</button>
              </div>
            </div>
            <div class="text-sm text-red-700">R$ {{ item.price.toFixed(2) }}</div>
          </li>
        </ul>
        <div class="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>R$ {{ total.toFixed(2) }}</span>
        </div>
        <button class="w-full mt-6 bg-red-600 text-white font-bold py-3 rounded-xl shadow hover:bg-red-700 transition" @click="enviarPedido">
          Finalizar Pedido
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['open', 'cart'])
const emit = defineEmits(['close', 'remove'])

const close = () => emit('close')
const remove = (index) => emit('remove', index)

const total = computed(() =>
  props.cart.reduce((sum, item) => sum + item.price * item.qty, 0)
)

const changeQty = (index, amount) => {
  const item = props.cart[index]
  if (!item) return

  if (item.qty + amount <= 0) {
    emit('remove', index) // Remove o item se quantidade ficar 0 ou menos
  } else {
    item.qty += amount
  }
}

const enviarPedido = async () => {
  if (!props.cart.length) {
    alert('O carrinho está vazio!')
    return
  }

  // Estrutura do pedido
  const pedido = {
    data: new Date().toISOString(),
    total: total.value,
    itens: props.cart.map(item => ({
      nome: item.name,
      quantidade: item.qty,
      preco: item.price
    }))
  }

  try {
    const res = await fetch('http://localhost:3000/pedidos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pedido)
    })

    if (!res.ok) throw new Error('Erro ao enviar pedido')
    emit('success')
    emit('close')
    emit('clean')
  } catch (err) {
    alert('Erro: ' + err.message)
  }
}
</script>

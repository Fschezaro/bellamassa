<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="container mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-red-800 mb-8 text-center">Pedidos Recebidos</h1>
      
      <div v-if="loading" class="text-center text-red-700 font-semibold">Carregando pedidos...</div>
      <div v-else-if="pedidos.length === 0" class="text-center text-gray-500">Nenhum pedido encontrado.</div>
      <div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(pedido, idx) in pedidos"
          :key="pedido.id || idx"
          class="bg-white rounded-2xl shadow-xl p-6 flex flex-col relative"
        >
          <!-- Botão Fechar -->
            <button
                class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition"
                @click="excluirPedido(pedido.id, idx)"
                aria-label="Fechar pedido"
                title="Fechar"
                >
                &times;
            </button>
          <div class="flex justify-between items-center mb-4">
            <span class="font-bold text-red-700">#{{ pedido.id || idx + 1 }}</span>
          </div>
          <div class="mb-3">
            <span class="block font-semibold text-lg text-gray-700 mb-2">Itens:</span>
            <ul>
              <li
                v-for="(item, i) in pedido.itens"
                :key="item.nome + i"
                class="flex justify-between text-gray-600 py-1 border-b last:border-b-0"
              >
                <span>{{ item.nome }} <span class="text-xs text-gray-400">x{{ item.quantidade }}</span></span>
                <span>R$ {{ (item.preco * item.quantidade).toFixed(2) }}</span>
              </li>
            </ul>
          </div>
          <div class="flex justify-between items-center mt-4 pt-4 border-t font-bold text-lg">
            <span>Total</span>
            <span class="text-red-700">R$ {{ pedido.total.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const pedidos = ref([])
const loading = ref(true)

function formatDate(date) {
  if (!date) return ''
  const d = new Date(date)
  return d.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(async () => {
  await carregarPedidos()
})

async function carregarPedidos() {
  loading.value = true
  try {
    const res = await fetch('http://localhost:3000/pedidos')
    if (!res.ok) throw new Error('Erro ao buscar pedidos')
    pedidos.value = await res.json()
  } catch (err) {
    alert('Erro ao carregar pedidos: ' + err.message)
  } finally {
    loading.value = false
  }
}

// Função para excluir o pedido
async function excluirPedido(id, idx) {
  const confirmar = confirm('Tem certeza que deseja excluir este pedido?')
  if (!confirmar) return

  // Se tem ID, exclui do backend; senão, só da lista local
  if (id !== undefined) {
    try {
      const res = await fetch(`http://localhost:3000/pedidos/${id}`, {
        method: 'DELETE'
      })
      if (!res.ok) throw new Error('Erro ao excluir pedido')
    } catch (err) {
      alert('Erro ao excluir pedido: ' + err.message)
      return
    }
  }
  // Remove localmente
  pedidos.value.splice(idx, 1)
}
</script>

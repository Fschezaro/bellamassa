<template>
  <form @submit.prevent="enviarPedido" class="form-pedido">
    <div class="form-item">
      <label for="nome">Nome do Produto:</label>
      <input id="nome" v-model="pedido.nome" type="text" required />
    </div>

    <div class="form-item">
      <label for="quantidade">Quantidade:</label>
      <input id="quantidade" v-model.number="pedido.qtd" type="number" min="1" required />
    </div>

    <div class="form-item">
      <label for="obs">Observações:</label>
      <textarea id="obs" v-model="pedido.obs" rows="1" />
    </div>

    <button type="submit">Enviar Pedido</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      pedido: {
        nome: '',
        qtd: 1,
        obs: ''
      }
    }
  },
  methods: {
    async enviarPedido() {
      const novoPedido = {
        ...this.pedido,
        data: new Date().toISOString()
      }

      try {
        const res = await fetch('http://localhost:3000/pedidos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(novoPedido)
        })

        if (!res.ok) throw new Error('Erro ao enviar pedido')
        alert('Pedido enviado com sucesso!')
        this.pedido = { nome: '', qtd: 1, obs: '' }
      } catch (err) {
        alert('Erro: ' + err.message)
      }
    }
  }
}
</script>
<style scoped>
.form-pedido {
  display: flex;
  gap: 20px;
  align-items: flex-end;
  flex-wrap: wrap;
}

.form-item {
  display: flex;
  flex-direction: column;
}

input,
textarea {
  padding: 6px 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 180px;
}
</style>

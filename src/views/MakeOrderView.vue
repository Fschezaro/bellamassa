<template>
      <RouterLink class="botao-pedido" to="/">Voltar</RouterLink>

    <div style="display: table-column">
        <h1>Faça um pedido!</h1>
        <OrderForm />
    </div>
</template>
<script setup>
import OrderForm from '../components/OrderForm.vue'

</script>
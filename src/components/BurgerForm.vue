<template>
  <div>
    <form id="burguer-form" @submit="createBurger">
        <div class="input-container">
          <label for="nome">Nome do cliente</label>
          <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite seu nome">
        </div>
      <div class="input-container">
          <label for="pao">Escolha o pão:</label>
          <select name="pao" v-model="pao">
            <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo  }}</option>
          </select>
      </div>
      <div class="input-container">
          <label for="carne">Selecione o tipo de carne:</label>
          <select name="carne" v-model="carne">
            <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
          </select>
      </div>
        <div id="optional-container" class="input-container">
            <label class="optional-title" for="opcionais">Selecione os opcionais:</label>
            <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
              <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
              <span>{{  opcional.tipo }}</span>
            </div>
        </div>
      <input type="submit" class="submit-btn" value="Crie meu burger">
    </form>
    <ul>
      <li v-for="opcional in opcionais"> {{opcional}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'BurgerForm',
  data(){
    return{
      paes: null,
      carnes: null,
      opcionaisdata: null,
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      msg: null
    }
  },
  methods: {
    async getIngredients() {
      const req = await fetch("http://localhost:3000/ingredientes");
      const data = await req.json();

      this.paes = data.paes;
      this.carnes = data.carnes;
      this.opcionaisdata = data.opcionais;
    },
    async createBurger(e) {
      e.preventDefault();

      const data ={
        nome: this.nome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais),
        status: "Solicitado"
      }

      const dataJson = JSON.stringify(data);

      const req = await fetch("http://localhost:3000/burgers", {
        method: "POST",
        headers: { "content-type": "application/json"},
        body: dataJson
      })
      const res = await req.json();

      this.nome ="";
      this.carne ="";
      this.pao ="";
      this.opcionais ="";

    }

  },
  mounted() {
    this.getIngredients();
  }

}

</script>
<style scoped>
  #burguer-form {
    max-width: 400px;
    margin: 0 auto;

  }

  .input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #FCBA03;
  }

  input, select {
    padding: 5px 10px;
    width: 300px;
  }

  #optional-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .optional-title {
    width: 100%;
  }

  .checkbox-container {
    display: flex;
    align-itens: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox-container span, .checkbox-container input {
    width: auto;
  }

  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
  }

  .submit-btn {
    background-color: #222;
    color: #FCBA03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    margin: 0 auto;
    cursor: pointer;
    transition: 3s;
  }

  .submit-btn:hover {
    background-color: transparent;
    color: #222222;
  }
  </style>
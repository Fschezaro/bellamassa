
<template>
  <div id="main-banner">
    <h1>Monte seu burguer</h1>
  </div>
  <div class="main-container">
    <BurgerForm />
  </div>
</template>

<script>
import Banner from "@/components/vc-banner.vue";
import BurgerForm from "@/components/BurgerForm.vue";

export default {
  name: "home",
  components: {Banner, BurgerForm}
}
</script>
<style scoped>
  #main-banner {
    background-image: url('/img/burger.jpg');
    background-position: 0 -250px;
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  #main-banner h1 {
    color: #FFFFFF;
    text-align: center;
    font-size: 60px;
    background-color: #222;
    padding: 20px;
  }
</style>
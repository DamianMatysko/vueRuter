
<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/Header.vue";
export default {
  components: {
    "app-header": header  //Patrik's help
  }
};
</script>

<style scoped>
body {
  margin: 0;
  background-color: #ccc;
}
</style>
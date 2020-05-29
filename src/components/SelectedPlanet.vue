<template>
  <div id="selectedPlanet">
    <div class="style">Name: {{planet.name}}</div>
    <div class="style">Terain: {{planet.terrain}}</div>
    <div class="style">Gravity: {{planet.gravity}}</div>
    <div class="style">Climate: {{planet.climate}}</div>
    <div class="style">Population: {{planet.population}}</div>
    <div class="style">Diameter: {{planet.diameter}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      planet: {}
    };
  },
  created() {
    fetch("https://swapi.dev/api/planets/" + this.id)
      .then(response => response.json())
      .then(data => {
        this.planet = data;
      });
  }
};
</script>

<style>
#selectedPlanet {
  columns: 1;
  column-gap: 30px;
  column-rule: 1px solid black;
  column-span: all;  
  
  width: 100%;
  border: 2px solid #ccc;
  padding: 10px;
  margin-bottom: 30px;
  max-width: 35%;
  margin: 10% auto;
}
.style {
  text-align: center;
  width: 100%;
  font-size: 1.4vw;
  padding: 10px;
  margin: 0px 0;
  border: 1px solid black;
  box-sizing: border-box;
  background: lightblue;
}
</style>
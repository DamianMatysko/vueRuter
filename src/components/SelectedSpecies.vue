<template>
  <div id="selectedSpecies">
    <div class="style">Name: {{specie.name}}</div>
    <div class="style">Language: {{specie.language}}</div>
    <div class="style">Classification: {{specie.classification}}</div>
    <div class="style">Average lifespan: {{specie.average_lifespan}}</div>
    <div class="style">Designation: {{specie.designation}}</div>
    <div class="style">Average height: {{specie.average_height}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      specie: {}
    };
  },
  created() {
    fetch("https://swapi.dev/api/species/" + this.id)
      .then(response => response.json())
      .then(data => {
        this.specie = data;
      });
  }
};
</script>

<style>
#selectedSpecies {
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
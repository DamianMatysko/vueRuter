<template>
  <div id="selectedPerson">
    <div class="style">Name: {{person.name}}</div>
    <div class="style">Height: {{person.height}}</div>
    <div class="style">Mass: {{person.mass}}</div>
    <div class="style">Hair color: {{person.hair_color}}</div>
    <div class="style">Skin color: {{person.skin_color}}</div>
    <div class="style">Birth year: {{person.birth_year}}</div>
    <div class="style">Gender: {{person.gender}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      person: {}
    };
  },
  created() {
    fetch("https://swapi.dev/api/people/" + this.id)
      .then(response => response.json())
      .then(data => {
        this.person = data;
      });
  }
};
</script>

<style>
#selectedPerson {
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
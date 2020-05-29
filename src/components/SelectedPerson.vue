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
max-width: 25%;
  margin: 5% auto;
   color: white;
}
.style {
  text-align: center;
  width: 100%;
  font-size: 1.4vw;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: rgb(43, 121, 86);
}
</style>
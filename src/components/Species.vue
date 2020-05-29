<template>
  <div id="species">
    <div v-for="(specie, index) in species" :key="index" class="selectedSpecies">
      <router-link v-bind:to="'/species/' + parseInt(index+1) ">
        <div>{{specie.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      species: [],
      id: ""
    };
  },
  created() {
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData(){
      fetch("https://swapi.dev/api/species/")
      .then(response => response.json())
      .then(data => {
        this.species = data.results;
      });
    }
  }
};
</script>

<style >
#species {
 columns: 200px 2;
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
.selectedSpecies {
  text-align: center;
  width: 100%;
  font-size: 1.4vw;
  padding: 3px;
  margin: 0px 0;
  border: 1px solid black;
  box-sizing: border-box;
  background: lightblue;
}
</style>
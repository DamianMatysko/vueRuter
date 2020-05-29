<template>
  <div id="planet">
    <div v-for="(planet, index) in planets" :key="index" class="selectedPlanet">
      <router-link v-bind:to="'/planets/' + parseInt(index+1) ">
        <div v:bind:id="1">{{planet.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planets: [],
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
      fetch("https://swapi.dev/api/planets/")
      .then(response => response.json())
      .then(data => {
        this.planets = data.results;
      });
    }
  }
};

</script>

<style >
#planet {
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
.selectedPlanet {
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
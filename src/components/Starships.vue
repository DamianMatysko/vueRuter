<template>
  <div id="starships">
    <div v-for="(starship, index) in starships" :key="index" class="selectedStarship">
      <router-link v-bind:to="'/starships/' + starship.url.slice(31,33) ">
        <div>{{starship.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      starships: [],
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
      fetch("https://swapi.dev/api/starships/")
      .then(response => response.json())
      .then(data => {
        this.starships = data.results;
      });
    }
  }
};
</script>

<style >
#starships {
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
.selectedStarship {
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
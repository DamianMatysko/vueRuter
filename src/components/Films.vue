<template>
  <div id="films">
    <div v-for="(film, index) in films" :key="index" class="selectedFilm">
      <router-link v-bind:to="'/films/' + parseInt(index+1) ">
        <div v:bind:id="1">{{film.title}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      films: [],
      id: ""
    };
  },
  created() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData(){
      fetch("https://swapi.dev/api/films/")
      .then(response => response.json())
      .then(data => {
        this.films = data.results;
      });
    }
  }
};

</script>


<style >
#films {
max-width: 25%;
  margin: 5% auto;
   color: white;
}

.selectedFilm {   
 text-align: center;
  width: 100%;
  font-size: 1.4vw;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: rgb(43, 121, 86);
}

</style>
<template>
  <div id="selectedFilm">
    <div class="style">Title: {{film.title}}</div>
    <div class="style">Episode # {{film.episode_id}}</div>
    <div class="style">Opening crawl: {{film.opening_crawl}}</div>
    <div class="style">Director: {{film.director}}</div>
    <div class="style">Producer: {{film.producer}}</div>
    <div class="style">Release date: {{film.release_date}}</div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.id,
      film: {}
    };
  },
  created() {
    fetch("https://swapi.dev/api/films/" + this.id)
      .then(response => response.json())
      .then(data => {
        this.film = data;
      });
  }
};
/*
export default {
  data() {
    return {
      id: this.$route.params.id,
      film: {}
    };
  },
  mounted() {
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData(){
    fetch("https:/swapi.dev/api/films/".concat(this.id))
      .then(response => response.json())
      .then(data => {
        this.film = data;
     });
    }
  }
};
*/
</script>

<style>
#selectedFilm {
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
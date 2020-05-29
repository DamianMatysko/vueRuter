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

</script>

<style>
#selectedFilm {
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
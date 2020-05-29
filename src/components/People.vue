<template>
  <div id="people">
    <div v-for="(person, index) in people" :key="index" class="selectedPerson">
      <router-link v-bind:to="'/people/' + parseInt(index+1) ">
        <div v:bind:id="1">{{person.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      people: [],
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
      fetch("https://swapi.dev/api/people/")
      .then(response => response.json())
      .then(data => {
        this.people = data.results;
      });
    }
  }
};

</script>

<style >
#people {
max-width: 25%;
  margin: 5% auto;
   color: white;
}
.selectedPerson {
text-align: center;
  width: 100%;
  font-size: 1.4vw;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: rgb(43, 121, 86);
}
</style>
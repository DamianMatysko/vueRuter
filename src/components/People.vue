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
.selectedPerson {
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
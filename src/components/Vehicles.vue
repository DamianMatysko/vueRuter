<template>
  <div id="vehicles">
    <div v-for="(vehicle, index) in vehicles" :key="index" class="selectedVehicle">
      <router-link v-bind:to="'/vehicles/' + vehicle.url.slice(30,32)">
        <div>{{vehicle.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vehicles: [],
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
      fetch("https://swapi.dev/api/vehicles/")
      .then(response => response.json())
      .then(data => {
        this.vehicles = data.results;
      });
    }
  }
};

</script>

<style >
#vehicles {
max-width: 25%;
  margin: 5% auto;
   color: white;  
}
.selectedVehicle {
text-align: center;
  width: 100%;
  font-size: 1.4vw;
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: rgb(43, 121, 86);
}
</style>
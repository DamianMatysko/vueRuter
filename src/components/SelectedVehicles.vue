<template>
  <div id="selectedVehicle">
    <div class="style">Name: {{vehicle.name}}</div>
    <div class="style">Model: {{vehicle.model}}</div>
    <div class="style">Cost: {{vehicle.cost_in_credits}}</div>
    <div class="style">Max speed: {{vehicle.max_atmosphering_speed}}</div>
    <div class="style">Length: {{vehicle.length}}</div>
    <div class="style">Cargo capacity: {{vehicle.cargo_capacity}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      vehicle: {}
    };
  },
  created() {
    fetch("https://swapi.dev/api/vehicles/" + this.id)
      .then(response => response.json())
      .then(data => {
        this.vehicle = data;
      });
  }
};
</script>

<style>
#selectedVehicle {
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
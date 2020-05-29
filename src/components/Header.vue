<template>
  <nav>
    <ul>
      <li>
        <router-link to="/people" exact>Actors</router-link>
      </li>
      <li>
        <router-link to="/planets" exact>Planets</router-link>
      </li>
      <li>
        <router-link to="/films" exact>Films</router-link>
      </li>
      <li>
        <router-link to="/species" exact>Species</router-link>
      </li>
      <li>
        <router-link to="/vehicles" exact>Vehicles</router-link>
      </li>
      <li>
        <router-link to="/starships" exact>Starships</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>


<style scoped>
ul {
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li {
  font-size: 1.1vw;
  display: inline-block;
  margin: 0 10px;
}
a {
  color:white;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav {
  list-style-type: none;
  text-align: center;
  margin: 0;
  
  background:	rgb(43, 121, 86);
  padding: 14px 0;
  margin-bottom: 40px;
  margin-top: 0px;
  font-family: Arial, Helvetica, sans-serif;
}
.router-link-active {
  background: rgb(53, 73, 94);
  color: white;
}
</style>
import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

import People from "./components/people";
import Planets from "./components/planets";
import Films from "./components/films";
/*
import SelectedPerson from "./components/SelectedPerson";
import SelectedPlanet from "./components/SelectedPlanet";
import SelectedFilm from "./components/SelectedFilm";
import Species from "./components/Species";
import SelectedSpecies from "./components/SelectedSpecies";
import Vehicles from "./components/Vehicles";
import SelectedVehicles from "./components/SelectedVehicles";
import Starships from "./components/Starships";
import SelectedStarships from "./components/SelectedStarships";
import Home from "./components/Home";
*/

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/people",
    component: People,
  }
  
  /*
  ,
  {
    path: "/people/:id",
    component: SelectedPerson,
  },  
  {
    path: "/planets",
    component: Planets,
  },
  {
    path: "/planets/:id",
    component: SelectedPlanet,
  },
  {
    path: "/films",
    component: Films,
  },
  {
    path: "/films/:id",
    component: SelectedFilm,
  },
  {
    path: "/species",
    component: Species,
  },
  {
    path: "/species/:id",
    component: SelectedSpecies,
  },
  {
    path: "/vehicles",
    component: Vehicles,
  },
  {
    path: "/vehicles/:id",
    component: SelectedVehicles,
  },
  {
    path: "/starships",
    component: Starships,
  },
  {
    path: "/starships/:id",
    component: SelectedStarships,
  },*/

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

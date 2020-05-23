<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg=postData(https://swapi.dev/api/)/>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

async function postData(url = '') {
  const response = await fetch(url, {
    method: 'GET',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response;
}



export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

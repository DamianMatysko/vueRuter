<template>
  <div class="about">
    <h1>This is an about page</h1>

  </div>
</template>

<script>
export default {
  
}
</script>
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
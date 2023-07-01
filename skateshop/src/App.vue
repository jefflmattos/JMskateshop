<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/Product">Product</router-link>
    </nav>
    <NavBar />
    <router-view/>
</div>
</template>
<script>
  
  
  import NavBar from '../src/components/NavBar.vue'
  
  

  export default {
      name: 'App',
      components: {
        NavBar,
      }
  }

</script>
<style scoped>

</style>

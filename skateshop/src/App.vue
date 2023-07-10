<template>
  <div>
    <HeaderApp />
    <router-view > </router-view>
    <footer-app />
  </div>
</template>

<script>
  
  import HeaderApp from './components/HeaderApp.vue'
  import FooterApp from './components/FooterApp.vue'    

  export default {
    name: 'App',
    components: {    
      HeaderApp,
      FooterApp
    }  
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  position: relative;
  font-family: 'Roboto', sans-serif;
}



</style>

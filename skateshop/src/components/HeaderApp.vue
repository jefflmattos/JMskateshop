<template>

    <header>
        <img 
        id="logo"
        src="../../public/images/skateboarder.png" 
        alt="">
        <h1> JM Skateshop </h1>
        <router-link 
        class="link"
        to="/">Home</router-link> 
        <router-link 
        class="link"
        to="/ProductView">Product</router-link>
    </header>

</template> 

<script>

    export default {
        name: 'HeaderApp'
    }

</script>

<style scoped>
 header {
    display: flex;
    justify-content: flex-end;
    background-color: #f1f1f1;    
    padding: 10px;
    border-bottom: 1px solid #ccc;    
    font-size: 20px;
    color: black;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 2px;
 }

.link {
    color: #fcba03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }

  .link:hover {
    color: #FFF;
  }

 #logo {
    width: 60px;
    height: 60px;
    margin: auto;
    margin-left: 0;
    

 }

header > h1 {
    display: relative;
    margin: 0px 756px 0px 0px
    
    
    

 }

</style>

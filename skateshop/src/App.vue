<template>
  <div>
    <HeaderApp />
    <router-view> </router-view>
    <productCard 
    v-for="p in product" 
    :key="p.id"
    :product_name="p.name"
    :product_price="p.price"
    :image_source="p.image_source"
    :image_alt="p.image_alt"
    />
    <footer-app />
  </div>
</template>


<script>
  import productCard from './components/productCard.vue';
  import HeaderApp from './components/HeaderApp.vue';
  import FooterApp from './components/FooterApp.vue'
  

export default {
  name: 'App',
  components: {
    productCard,
    HeaderApp,
    FooterApp

    
},
  data() {
    return {
      product: [],
    };
  },
  created() {
    //IDK why I coundn't make it with axios, so I used fetch
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => this.product = data)     
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.grid {
  display: relative;
  
 
}
</style>

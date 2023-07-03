<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/ProductView">Product</router-link>
    </nav>
    <productCard 
    v-for="p in product" 
    :key="p.id"
    :product_name="p.name"
    :product_price="p.price"
    :image_source="p.image_source"
    :image_alt="p.image_alt"
    


    />
  </div>
</template>


<script>
  import productCard from './components/productCard.vue';

export default {
  name: 'App',
  components: {
    productCard
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

<style scoped>
.grid {
  display: relative;
  
 
}
</style>

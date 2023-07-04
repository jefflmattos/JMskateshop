<template >
  <main>        
      <BannerHead />
      <FilterProduct />
      <h2> Meet our products</h2>
      <product_card
      
      
      />
      
  </main>
 
</template>

<script>
  
  //import components 
 // import product_card from '../components/productCard.vue'
  import BannerHead from '../components/BannerHead.vue'
  import FilterProduct from '../components/FilterProduct.vue'
  

  export default {
      name: 'HomeView',
      components: {
          BannerHead,
          FilterProduct,
          
      },  
    data() {
        return {
            products: []
    }
    
    },
    methods: {
      getProducts(products) {
        this.product = products
      }
    }
    //created() { //msg que aparece quando o card é criado, podendo usar para load padrão
      //  this.getProduct();
    //},
    
}
</script>


<style scoped>
  h2 {
    
    text-align: center;
  }
</style>
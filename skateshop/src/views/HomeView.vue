<template >
  <main>        
      <BannerHead />
      <h2> Meet our products</h2>
      <FilterProduct />
      
      <section class="grid">
        <productCard 
        v-for="p in product" 
        :key="p.id"
        :product_name="p.name"
        :product_price="p.price"
        :image_source="p.image_source"
        :image_alt="p.image_alt"
        />

        
  </section>
      
  </main>
 
</template>

<script>
  
  //import components 
 // import product_card from '../components/productCard.vue'
  import BannerHead from '../components/BannerHead.vue'
  import FilterProduct from '../components/FilterProduct.vue'
  import productCard from '../components/productCard.vue'
  

  export default {
      name: 'HomeView',
      components: {
        BannerHead,
        FilterProduct,
        productCard
        
      },  
    data() {
        return {
            product: []
          }
        },
        methods: { //push the product details to ProductAbout view
          goToProductDetails(product) {
            this.$router.push({
              name: 'ProductDetails', params: {
                productId: product.id,
                productName: product.name,
                productPrice: product.price,
                productDetails: product.description,
                imageSource: product.image_source,
                imageAlt: product.image_alt
              }
              }
            );
          } 
        },
        created() {
          //IDK why I coundn't make it with axios, so I used fetch
          fetch('http://localhost:3000/products')
          .then(response => response.json())
          .then(data => this.product = data)
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

  .grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;  
  align-items: center;
  margin-left: 50px;
}
</style>
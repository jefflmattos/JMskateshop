<template >
  <main>        
      <BannerHead />
      <h2> Meet our products</h2>      
      <FilterProduct v-model="keyword" />
      
      
      <section class="grid">
        <productCard 
        v-for="p in filterProducts" 
        :key="p.id"
        :id="p.id"
        :product_name="p.name"
        :product_price="p.price"
        :image_source="p.image_source"
        :image_alt="p.image_alt"
        />

        
  </section>
      
  </main>
 
</template>

<script>
  
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
            product: [],
            keyword: ''
          }
        },
        computed: {
          //Isn't filtering products by its name and I can't figure out why
          filterProducts() {
          const { product, keyword } = this;
          console.log('Keyword:', keyword);
          const lowerKeyword = keyword.toLowerCase();
          console.log('Product name:', name);
          return product.filter(( { name }) =>  name.includes(lowerKeyword));
          }
        },
        methods: {
          //IDK why I coundn't make it with axios, so I used fetch
          //Load async data, if response =! ok, throw error
          async loadProductData() {
            try {
              const response = await fetch('http://localhost:3000/products');
              if (!response.ok) {
                throw new Error('Failed to fetch product data');
              }
              const data = await response.json();
              this.product = data;
            } catch (error) {
              console.error(error);
              // should create a error message for user
            }
          },
           //push the product card details to ProductAbout view
          goToProductAbout(product) {
            this.$router.push({
              name: 'ProductAbout', params: {
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
          this.loadProductData()}
           
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
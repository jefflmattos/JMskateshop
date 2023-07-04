<template>

  <div>
    <product-details />
    <h1>{{ productPrice }}</h1>
  </div>

</template>

<script>
import ProductDetails from '../components/ProductDetails.vue'

  export default {
    name: 'ProductAbout',
    props: ['productId', 'imageAlt', 'imageSource', 'productDetails', 'productPrice', 'productName'],
    computed: {
    product() { // verify the 
      return this.products.find(
        p => p.id === parseInt(this.productId)
        );
      }
    },
    components: {
      ProductDetails
    }
  }
</script>
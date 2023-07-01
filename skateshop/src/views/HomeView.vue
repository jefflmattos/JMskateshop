<template >
  <main>        
      <BannerHead />
      <FilterProduct />
      <product_card
      product_photo="../../public/images/lixa.jpg"
      photo_description="inhaimmmmm"
      product_name="produto nome"
      product_link="#"
      product_alt="Descrição do produto" />
  </main>
 
</template>

<script>
  import product_card from '../components/productCard.vue'
  import BannerHead from '../components/BannerHead.vue'
  import FilterProduct from '../components/FilterProduct.vue'

  export default {
      name: 'HomeView',
      components: {
          product_card,
          BannerHead,
          FilterProduct
      }
  }
</script>

<style scoped>

</style>
<template >
    <main class="container-fluid">
        <NavBar />
        <BannerHead />
        <FilterProduct />
        <product_card />
        
       
        
    </main>
   
</template>

<script>
    import product_card from './components/productCard.vue'
    import NavBar from './components/NavBar.vue'
    import BannerHead from './components/BannerHead.vue'
    import FilterProduct from './components/FilterProduct.vue'

    export default {
        name: 'App',
        components: {
            product_card,
            NavBar,
            BannerHead,
            FilterProduct
        }
    }
</script>

<style scoped>

</style>
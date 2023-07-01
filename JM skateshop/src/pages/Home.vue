<template >
    <main>        
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
        name: 'Home',
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
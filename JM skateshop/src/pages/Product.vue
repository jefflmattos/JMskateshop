<template>
    <main>
        <NavBar />
        <BannerHead/>
        <h1> oi</h1>
</main>
</template>

<script>
    import NavBar from './components/NavBar.vue'
    import BannerHead from './components/BannerHead.vue'

    export default {
        nome: 'Product',
        components: {
            NavBar,
            BannerHead
        },
        data() {
            return {

            }
        }
    }
</script>
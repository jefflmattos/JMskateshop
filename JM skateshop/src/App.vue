<template >
    <main >
        <NavBar />
        <product_card />
    </main>
   
</template>

<script>
    import product_card from './components/productCard.vue'
    import NavBar from './components/NavBar.vue'

    export default {
        name: 'App',
        components: {
            product_card,
            NavBar
        }
    }
</script>

<style>
    main {
        
        display: block;
        outline: 1px blue dashed;
        background-color: rgba(0, 0, 0, 0.404);
        padding: 100px;
        
        
    }

    .navbar {
        background-color: #f5f5f5;
        
        outline: 1px red dashed;
        

    }
</style>
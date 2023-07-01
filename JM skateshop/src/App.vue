<template >
    <main>
        <NavBar/>
        <router-view/>       
    </main>   
</template>

<script>
    import NavBar from '../../skateshop/src/components/NavBar.vue'

    export default {
        components: {
            NavBar
        }
    }
</script>

<style scoped>
    
</style>
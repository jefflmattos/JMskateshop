

<template>
    <header>        
        <h1> Skate with style, skate with us. </h1>
    </header>
</template>

<script>
    export default {
        name: 'BannerHead',
        data() {
            return {
                    
            }
        }
    }
</script>

<style scoped>
header {
    background-image: url('../../public/images/banner-pusher.jpg');
    background-position: 0 -250px;
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    
}

h1 {
    color: #FFF;
    text-align: center;
    font-size: 40px;
    background-color: #2222228e;
    padding: 20px 40px;
    border-radius: 20px;
    margin-left: 10px ;
}
</style>
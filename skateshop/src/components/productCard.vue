<template>
    

    <article class="card">
        <figure>
            <img             
            :src="product_photo_path"
            :alt="product_alt">
            <a 
            :href="product_link">
            <figcaption> {{ product_name }}</figcaption>   
            </a>
        </figure>
    </article>

</template>

<script>
    export default {
        name: 'product_card',
        props: {
            product_photo_path: String,
            product_alt: String,
            product_link: String,
            product_name: String
        },
        data() {
            return {

            }
        },
        created() { //msg que aparece quando o card é criado, podendo usar para load padrão
            this.msg = ""
        },
        mounted() { //quando os dados do bd são finalmente carregados
            this.msg = ""
        }
    }
</script>

<style scoped>
   .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: fit-content;
    align-items: center;
    padding: 3px;
    position: relative;
    left: 50px;    
   }
   .card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

   img {
    width: 200px;
   }
</style>
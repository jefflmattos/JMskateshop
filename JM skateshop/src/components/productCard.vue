<template>

    <article class="card">
        <figure>
            <img             
            :src="img"
            :alt="alt">
            <a 
            :href="product_link">
            <figcaption> {{ img_description }}</figcaption>   
            </a>
        </figure>
    </article>

</template>

<script>
    export default {
        name: 'product_card',
        data() {
            return {
                img: "/img/amortecedores.jpg",
                alt: "img description",
                img_description: "Produto 1",
                product_link: "#"
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
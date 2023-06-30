<template>

    <article class="col-sm-4 card p-3 container bg-light">
        <figure>
            <img 
            class="img-thumbnail mx-auto d-block"
            :src="img"
            :alt="alt">
            <a 
            :href="product_link"
            class="card-link">
            <figcaption class="text-center card-text"> {{ img_description }}</figcaption>   
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

<style>
    article {
        outline: 1px green dashed;
    }
</style>
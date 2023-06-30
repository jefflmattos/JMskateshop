<template>

    <article class="row card p-5">
        <a :href="product_link">
            <figure>
                <img class="img-thumbnail" :src="img" :alt="alt" >
                <figcaption> {{ img_description }}</figcaption>   
            </figure>
        </a>
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
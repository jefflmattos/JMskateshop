<template>
    
        <article class="card">
            <figure>
                <img             
                :src="img_src"
                :alt="image_alt">
                <a 
                :href="product_name">
                <figcaption> {{ product_name }}</figcaption>   
                </a>
            </figure> 
        </article>
        

</template>

<script>
    export default {
        name: 'product_card',
        props: {
            id: String,
            product_name: String,
            product_description: String,
            product_price: Int16Array,
            image_alt: String,
            image_product: String,
            image_source: String

        },
    computed: { // dinnamically render source images
      img_src() { return `../images/${this.image_source}.jpg` }
    }
    }
</script>

<style scoped>

   .card {
    display: grid;
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
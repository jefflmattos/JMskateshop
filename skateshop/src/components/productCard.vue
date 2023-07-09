<template>
    
        <article class="card">
            
            <figure>
                <img             
                :src="img_src"
                :alt="image_alt"
                style="width: 200px; height: 200px;"
                >
                <router-link :to="`/ProductAbout/${id}`">                
                <figcaption> {{ product_name }}  </figcaption>   
                </router-link>
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
            product_price: Number,
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
    text-align: center;
   }
   .card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

   
</style>
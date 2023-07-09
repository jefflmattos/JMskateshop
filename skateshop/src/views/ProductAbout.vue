<template>

  <main >
    

      <h2>Product Details</h2>
      <h3>{{ product.name }}</h3> 
      <section>
        <figure>
          <img 
          :src="img_src" 
          :alt="product.image_alt"
          style=" 
          max-width:600px;
          max-height:450px;
          width: auto;
          height: auto;">      
        </figure>   

        <aside>
          <p id="description">DESCRIPTION: {{ product.description }}</p>
          <p id="value">VALUE: {{ product.price }}</p> 
        </aside>
    </section>
    <FooterApp />
  </main>

</template>

<script>
import axios from 'axios';


  export default {    
    data() {
      return {
        //Don't remembrer why I put this datas here, but without it, the page doesn't render
        product: [],        
        id: this.$route.params.id,
        
        
        
      }
    },
    created() {
      //Didn't find any way to pass the product details as parameters, so I made another request. This time, using axios
      this.id = this.$route.params.id;
      axios.get(`http://localhost:3000/products/${this.id}`).then(response => {
        this.product = response.data;
      });    
    },
    computed: {
      img_src() {         
        return `../images/${this.product.image_source}.jpg` },
      
    }
  }
</script>

<style scoped>


  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;    
    margin: auto;
    width: 98%;
    height: 100%;
    
    
    
  }
  h2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 2rem;
    color: #000000;    
    margin: 0 auto;
    padding: 0;
  }

  h3 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    font-size: 1.5rem;
    color: #000000;    
    margin: 0 auto;
    padding: 0;
  }

  figure {
    display: grid;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 100%;
    height: 100%;
    
    
  }

  aside {
    grid-area: 1 / 2 / 2 / 3;
    
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    margin-top: 200px;
    padding: 0px;
    font-size: 1.5rem;
    color: #000000;   
    
  }
    
</style>
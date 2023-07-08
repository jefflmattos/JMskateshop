<template>
    <div>
      <input v-model="searchTerm" type="text" placeholder="Search products">
    </div>
  </template>
  
<script>
export default {
    name: "FilterProduct",
    data() {
        return {

        }
    }
}
</script>

<style scope>
    input {
        width: 200px;
        margin: 5px;
        position: relative;
        left: 77vw;
    }
</style>
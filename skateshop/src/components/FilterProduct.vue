<template>
    <div>
      <input v-bind:value="value" 
      v-on:input="$emit('input', $event.target.value)"
      placeholder="Search products">
    </div>
  </template>
  
<script>
export default {
    name: "FilterProduct",
    props: ['value']
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
<template>
    <div>
      <input 
        :value="modelValue" 
        @input="$emit('update:modelValue', $event.target.value)"
        placeholder="Search products">
    </div>
  </template>
  
<script>
export default {
    name: "FilterProduct",
    props: ['modelValue']
    }

</script>

<style scope>
    input {
        width: 200px;
        margin: 15px;
        position: relative;
        left: 77vw;
    }
</style>
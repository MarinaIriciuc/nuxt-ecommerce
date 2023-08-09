<script setup>

defineProps({
  category: {}
})

</script>

<template>
  <NuxtLink :to="category.name" class="text-black">
    <button class="btn border border-2 rounded-0 px-3 category-button text-capitalize">{{category.name}}</button>
  </NuxtLink>
</template>

<style scoped>
.category-button:hover{
  border: 2px solid black !important;
  transition: 0.6s;
}
</style>
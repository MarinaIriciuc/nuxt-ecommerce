<script setup>
defineProps({
  image: String
})
</script>

<template>
  <img :src="image" class="w-100 p-0" alt="">
</template>

<style scoped>

</style>
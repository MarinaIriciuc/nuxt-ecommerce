<script setup>
defineProps({
  title: String,
  price: Number,
  slider: Boolean
})
</script>

<template>
  <h6 class="fw-normal" :style="slider ? 'font-size: .81em' : ''">{{title}}</h6>
  <h5 :style="slider ? 'font-size: .81em' : ''">$ {{ price }}</h5>
</template>

<style scoped>
h6 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
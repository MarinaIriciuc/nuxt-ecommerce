<script setup>
import ImageCard from "~/components/ProductCard/ImageCard.vue";
import InfoCard from "~/components/ProductCard/InfoCard.vue";

defineProps({
  product: {},
  slider: Boolean
})


</script>

<template>
  <NuxtLink :to="`/${product.category.name}/${product.slug}`" class="text-decoration-none">
    <div class="card rounded-0 border-2 product-card">
      <div class="card-body p-0">
        <ImageCard :image="product.image"/>
      </div>
      <div class="card-footer border-0">
        <InfoCard :title="product.name" :price="product.price" :slider="slider"/>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>

.product-card:hover {
  border: 2px solid black !important;
  transition: 0.8s;
}
</style>
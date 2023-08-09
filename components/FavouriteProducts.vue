<script setup>
import {useFetch} from "#app";

const {data: products} = useFetch('/api/products?limit=8')


</script>

<template>
  <div class="row" style="margin-top: 140px">
    <div class="col-12 mb-2">
      <h4 class="fw-bold"> Products we are proud of </h4>
    </div>
    <div v-for="product in products" class="col-xl-3 col-lg-4 col-md-6 col-12 mt-4">
      <ProductCard :product="product"/>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup>
defineProps({
  title: String,
  description: String,
  image: String,
  imageSize: String
})
</script>

<template>
  <div class="row" style="margin-top: 100px;margin-bottom: 60px;">
    <div class="col-xl-6 col-lg-5 d-flex flex-column justify-content-center">
      <h4 class="fw-bold mt-2">{{ title }}</h4>
      <h6 class="mt-2">{{ description }}</h6>
      <NuxtLink to="/all">
        <div>
          <button class="btn btn-dark border-2 rounded-0 fw-semibold mt-2 shop-button">SHOP NOW</button>
        </div>
      </NuxtLink>
    </div>
    <div class="col-xl-6 col-lg-7 mt-lg-0 mt-5">
      <img :src="image" class="object-fit-cover img-fluid w-100" :class="imageSize === 'medium' ? 'h-75' : 'h-100'" alt=""/>
    </div>
  </div>
</template>

<style scoped>
.shop-button:hover {
  background-color: white;
  border: 3px solid black;
  color: black;
}
</style>
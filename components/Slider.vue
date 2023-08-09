<script setup>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Navigation, Pagination, Slide} from "vue3-carousel";


const {data: products} = await useFetch('/api/products')

const itemsPerSlide = ref(4.5)

function setItemsPerSlide() {
  if (window.innerWidth <= 767) {
    itemsPerSlide.value = 1
  } else if (window.innerWidth >= 768 && window.innerWidth <= 900) {
    itemsPerSlide.value = 2
  } else if (window.innerWidth > 900 && window.innerWidth <= 1200) {
    itemsPerSlide.value = 3.5
  } else {
    itemsPerSlide.value = 4.5
  }
}


onMounted(() => {
  addEventListener("resize", setItemsPerSlide)

  setItemsPerSlide()
})

onUnmounted(() => {
  removeEventListener("resize", setItemsPerSlide)
})


</script>

<template>
  <div class="row">
    <div class="col-12">
      <h4 class="fw-semibold">Trending Now</h4>
    </div>
    <div class="col-12 mt-4">
      <Carousel :items-to-show="itemsPerSlide" :wrap-around="true">
        <Slide v-for="product in products" :key="product">
          <div class="ms-1" style="width: 100%">
            <ProductCard :product="product" :slider="true"/>
          </div>
        </Slide>
        <template #addons>
          <Navigation/>
          <Pagination/>
        </template>
      </Carousel>
    </div>
  </div>

</template>

<style scoped>

</style>
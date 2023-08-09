<script setup>
definePageMeta({
  middleware: ['logged']
})
const route = useRoute()

useHead({
  title: route.params.category
})


const {data: products} = await useFetch(`/api/${route.params.category}/products`);
const {data: categories} = await useFetch('/api/categories');
if (route.params.category !== 'all') {
  const {data: currentCategory} = await useFetch(`/api/category/${route.params.category}`)
  if (!currentCategory.value)
    throw createError({
      statusCode: 404,
      statusMessage: 'Categoria nu exista'
    })
}


</script>


<template>
  <div class="row" style="margin-top: 160px;">
    <div class="col-3">
      <NuxtLink to="/" class="d-flex align-items-center text-decoration-none text-black gap-1 mb-0 pb-0 p-0">
        <Icon name="material-symbols:arrow-back-ios-new-rounded" class="mt-1"/>
        <h6 class="mb-0 mt-1">Home</h6>
      </NuxtLink>
    </div>
    <div class="col-6">
      <h4 class="fw-bolder mb-0 text-capitalize d-flex justify-content-center">{{ route.params.category }}</h4>
    </div>
  </div>
  <div class="d-flex flex-wrap justify-content-center mt-5 gap-2">
    <NuxtLink to="/all" class="text-black">
      <button class="btn border border-2 rounded-0 px-3 category-button text-capitalize">All</button>
    </NuxtLink>
    <div v-for="category in categories">
      <CategoryButton :category="category"/>
    </div>
  </div>
  <div class="row mt-5 mb-5">
    <div v-for="product in products" class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-12 mt-4">
      <ProductCard :product="product"/>
    </div>
  </div>
</template>


<style scoped>
.category-button:hover {
  border: 2px solid black !important;
  transition: 0.6s;
}
</style>
<script setup>
definePageMeta({
  layout: false,
  middleware: ['logged']
})
useHead({
  title: "Cart"
})
const {data, refresh: refreshCart} = await useFetch('/api/cart')


</script>

<template>
  <div>
    <p class="py-3 bg-black text-white d-flex justify-content-center fw-bold">SUMMER DISCOUNTS: Up to -70%</p>
    <NuxtLayout name="admin">
      <div class="row">
        <div class="col-lg-6 col-12">
          <h4 v-if="data.items?.length === 0" class="d-flex ms-5">Cart is empty</h4>
          <h4 v-else class="d-flex ms-5">Your have - {{ data.items?.length }} products to the cart</h4>
          <ProductCart v-for="cartItem in data.items" :cartItem="cartItem" :refreshCart="refreshCart"/>
        </div>
        <div class="col-lg-6 col-12 mt-lg-0 mt-5 px-5">
          <div class="d-flex justify-content-between">
            <h6 class="fw-normal">Shipping</h6>
            <h6 class="fw-normal">$ 0.00</h6>
          </div>
          <div class="d-flex justify-content-between">
            <h5 class="fw-bolder">Total</h5>
            <h5 class="fw-bolder">$ {{data.total}}</h5>
          </div>
          <button class="btn btn-dark rounded-0 w-100 mt-2">Complete the order</button>
          <!--          <CreditCards/>-->
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>
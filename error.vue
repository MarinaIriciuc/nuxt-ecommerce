<script setup>
defineProps(['error'])
definePageMeta({
  middleware: ['auth']
})
</script>

<template>
  <!--  {{ error }}-->

  <div class="row align-items-center justify-content-center min-vh-100"
       style="padding-left: 120px;padding-right: 120px">
    <div class="col-md-6 col-12">
      <h1 class="fw-bolder" style="font-size: 65px"> 404 </h1>
      <h4 class="fw-bold"> Ooops !</h4>
      <h4 class="fw-bold">Page Not Found</h4>
      <p class="text-secondary mb-0">This page doesn't exist or was removed !</p>
      <p class="text-secondary">We suggest you back to home.</p>
      <NuxtLink to="/">
        <button class="btn text-white rounded-1 mt-4 py-2" style="background-color: #A294FE">Back to home</button>
      </NuxtLink>
    </div>
    <div class="col-md-6 col-12">
      <img src="https://i.ibb.co/qMBpHVC/404-error-3702359-3119148.png" class="img-fluid" alt="">
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup>
definePageMeta({
  middleware: ['auth']
})
useHead({
  title: "Ecommerce"
})

</script>


<template>

  <HomeSection/>
  <FavouriteProducts/>
  <Banner image-size="medium" title="Creative harmonious living"
          description="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
          image="https://i.ibb.co/YNz87Rc/banner1-021adea5caa612e7dea0.jpg"/>
  <Slider/>
  <Banner title="Comfortable & Elegante Living"
          description="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
          image="https://i.ibb.co/hHxkJCH/banner2-03a2ebf8d998e53d1019.jpg" class="flex-row-reverse"/>
</template>


<style scoped>


</style>
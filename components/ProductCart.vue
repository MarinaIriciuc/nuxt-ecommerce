<script setup>

const props = defineProps({
  cartItem: {},
  refreshCart: Function
})

async function deleteProductFromCart(itemID) {
  await useFetch('/api/cart/delete', {
    method: "DELETE",
    body: {
      id: itemID,
    }
  })
  props.refreshCart()
}




</script>


<template>
  <div class="ms-5 mt-5">
    <!--    <button class="btn btn-close ms-3 mt-3 border border-secondary"></button>-->
    <div class="d-flex px-5 py-3 mt-2 gap-3">
      <img :src="cartItem.product.image" class="img-fluid w-25 h-25" alt="">
      <div class="flex-grow-1">
        <div class="d-flex justify-content-between p-0">
          <h6 class="fw-bold">{{ cartItem.product.name }}</h6>
          <h6 class="mb-0">${{ cartItem.product.price }}</h6>
        </div>
        <h6 class="fw-normal text-secondary">{{ cartItem.product.category.name }}</h6>
        <h6 class="fw-normal">{{ cartItem.product.size }}</h6>
        <h6 class="fw-normal">{{ cartItem.product.texture }}</h6>
        <div class="d-flex justify-content-between">
          <p>{{ cartItem.quantity }}</p>
          <button @click="deleteProductFromCart(cartItem.id)" class="btn border-0 text-danger p-0 mb-2">REMOVE
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>
<script setup>
import Swal from "sweetalert2";

definePageMeta({
  middleware: ['auth']
})
const route = useRoute();

useHead({
  title: route.params.category
})



const {data: product} = await useFetch(`/api/products/${route.params.name}`)
let quantity = ref(1)

function addQuantity() {
  quantity.value++
}
function removeQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}
async function addProductInCart(product) {
  const {data: productInCart} = await useFetch('/api/cart/product', {
    method: "POST",
    body: {
      productId: product.id,
      quantity: quantity.value
    }
  })

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'The product has added successfully to the cart',
    showConfirmButton: false,
    timer: 1000
  })
}


</script>

<template>

  <div class="row align-items-center min-vh-100">
    <h2 class="d-flex justify-content-center fw-bolder" style="margin-top: 100px">{{ product.name }}</h2>
    <div class="col-lg-6 col-12 mt-lg-0 mt-5 d-lg-block d-flex justify-content-center">
      <img :src="product.image" class="img-fluid" alt="">
    </div>
    <div class="col-lg-6 col-12 mt-lg-0 mt-5"
         style="background-color: #e7e5e5;padding-top: 120px;padding-bottom: 120px;">
      <div class="px-5">
        <p class="fw-normal">{{ product.description }}</p>
        <div class="d-flex justify-content-between align-items-center mt-4">
          <h5 class="mb-0 fw-bolder">Quantity</h5>
          <div class="d-flex">
            <button @click="removeQuantity" class="btn border border-secondary rounded-0 px-3">-</button>
            <button class="btn border border-secondary rounded-0 px-3">{{ quantity }}</button>
            <button @click="addQuantity" class="btn border border-secondary rounded-0 px-3">+</button>
          </div>
          <h5 class="mb-0 fw-bolder">$ {{ product.price * quantity }}</h5>
        </div>
        <div class="d-flex justify-content-between mt-5">
          <button @click="addProductInCart(product)"
                  class="btn border border-2 border-dark fw-bolder rounded-0 w-50 py-3 cart-button">ADD TO CART
          </button>
          <button class="btn border border-2 fw-bolder text-white rounded-0 w-50 buy-button ms-2"
                  style="background-color: #B6002C;border: 2px solid #B6002C!important;">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="row gx-3" style="margin-top: 120px">
    <div class="col-md-4 col-12">
      <div class="py-4 px-4 border d-flex flex-column justify-content-center" style="background-color: #e7e5e5">
        <h5 class="fw-bolder m-0">Texture:</h5>
        <p class="text-capitalize fw-normal mb-0 mt-2">{{ product.texture }}</p>
      </div>
    </div>
    <div class="col-md-4 col-12 mt-md-0 mt-3">
      <div class="py-4 px-4 border d-flex flex-column justify-content-center" style="background-color: #e7e5e5">
        <h5 class="fw-bolder m-0">Weight:</h5>
        <p class="text-capitalize fw-normal mb-0 mt-2">{{ product.weight }}</p>
      </div>
    </div>
    <div class="col-md-4 col-12 mt-md-0 mt-3">
      <div class="py-4 px-4 border d-flex flex-column justify-content-center" style="background-color: #e7e5e5">
        <h5 class="fw-bolder m-0">Size:</h5>
        <p class="text-capitalize fw-normal mb-0 mt-2">{{ product.size }}</p>
      </div>
    </div>
  </div>
  <div class="row" style="margin-top:120px;margin-bottom: 120px">
    <Slider/>
  </div>

</template>

<style scoped>
.cart-button:hover {
  background-color: black;
  color: white;
}


.buy-button:hover {
  background-color: white !important;
  color: #B6002C !important;
  border: 2px solid #B6002C !important;
}
</style>
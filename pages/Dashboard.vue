<script setup>
import Swal from "sweetalert2";

definePageMeta({
  layout: false,
  middleware: ['auth']
});
useHead({
  title: "Dashboard"
})

const {getSession} = useAuth()
const {user} = await getSession();
console.log(user)
const {data: products, refresh: refreshProducts} = await useFetch('/api/products')

async function deleteProduct(id) {
  if (user.isAdmin) {
    const {data} = await useFetch('/api/products/deletedProduct', {
      method: "DELETE",
      body: id
    })
    await refreshProducts()
  } else {
    Swal.fire({
      title: 'Error!',
      text: 'You cannot delete the product, because you are not an administrator.',
      icon: 'error',
      confirmButtonText: 'Exit'
    })
  }


}


</script>

<template>
  <div>
    <NuxtLayout name="admin">
      <div class="table-responsive">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Image</th>
            <th scope="col">Product</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
          </thead>
          <tbody>
          <tr class="align-middle" v-for="product in products" :key="product.id">
            <th scope="row">
              <div @click="deleteProduct(product.id)" class="form-check">
                <input class="form-check-input border border-secondary" type="checkbox" value="" id="flexCheckChecked">
              </div>
            </th>
            <td><img :src="product.image" class="img-fluid" style="width: 80px;" alt=""></td>
            <td>{{ product.name }}</td>
            <td>
              {{ product.category.name }}
            </td>
            <td>$ {{ product.price }}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>
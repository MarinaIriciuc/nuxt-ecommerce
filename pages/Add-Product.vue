<script setup>
import slugify from "slugify";
import Swal from 'sweetalert2'
definePageMeta({
  layout: false,
  middleware: ['logged']
})
useHead({
  title: "Add product"
})

const {data: categories} = await useFetch('/api/categories')
let errors = ref({})

const { $swal } = useNuxtApp()

let formName = ref('')

// watch(formName, function(newFormName) {
//   formSlug.value = slugify(newFormName)
// })

const formSlug = computed(function () {
  return slugify(formName.value)
});
async function postProduct(event) {
  const formData = {
    name: event.target.elements.title.value,
    slug: event.target.elements.slug.value,
    description: event.target.elements.description.value,
    price: Number(event.target.elements.price.value),
    texture: event.target.elements.texture.value,
    weight: Number(event.target.elements.weight.value),
    size: event.target.elements.size.value,
    categoryId: Number(event.target.elements.category.value)
  }
  const {data} = await useFetch('/api/products/product',
      {
        method: "POST",
        body: formData,
        cache: 'no-cache'
      })
  if (!data.value.success) {
    errors.value = data.value.errors
  }
  else {
    Swal.fire({
      title: 'Success!',
      text: 'The product has been successfully added.',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
    errors.value = {}
    event.target.reset()
    formName.value = ''
  }
}


</script>

<template>
  <div>
    <NuxtLayout name="admin">
      <h4 class="ms-5">Products</h4>
      <form @submit.prevent="postProduct">
        <div class="d-flex flex-column row-gap-3 mx-5 mt-4">
          <div>
            <input v-model="formName" :class="errors.name ? 'is-invalid' : ''" name="title"
                   type="text"
                   class="form-control border-2 shadow-none"
                   placeholder="Title"/>
            <div class="invalid-feedback">
              {{ errors.name }}
            </div>
          </div>
          <div>
            <input :class="errors.slug ? 'is-invalid' : ''" name="slug" type="text"
                   class="form-control border-2 shadow-none" placeholder="Slug" :value="formSlug">
            <div class="invalid-feedback">
              {{ errors.slug }}
            </div>
          </div>
          <div>
            <input :class="errors.description ? 'is-invalid' : ''" name="description" type="text"
                   class="form-control border-2 shadow-none" placeholder="Description">
            <div class="invalid-feedback">
              {{ errors.description }}
            </div>
          </div>
          <div>
            <input :class="errors.price ? 'is-invalid' : ''" name="price" type="text"
                   class="form-control border-2 shadow-none" placeholder="Price">
            <div class="invalid-feedback">
              {{ errors.price }}
            </div>
          </div>
          <div>
            <input :class="errors.texture ? 'is-invalid' : ''" name="texture" type="text"
                   class="form-control border-2 shadow-none" placeholder="Texture">
            <div class="invalid-feedback">
              {{ errors.texture }}
            </div>
          </div>
          <div>
            <input :class="errors.weight ? 'is-invalid' : ''" name="weight" type="number"
                   class="form-control border-2 shadow-none" placeholder="Weight">
            <div class="invalid-feedback">
              {{ errors.weight }}
            </div>
          </div>
          <div>
            <input :class="errors.size ? 'is-invalid' : ''" name="size" type="text"
                   class="form-control border-2 shadow-none" placeholder="Size">
            <div class="invalid-feedback">
              {{ errors.size }}
            </div>
          </div>
          <div>
            <select :class="errors.categoryId ? 'is-invalid' : ''" name="category" class="form-select"
                    aria-label="Default select example">
              <option selected>Category</option>
              <option v-for="category in categories" :key="category.id" :value="category.id"> {{
                  category.name
                }}
              </option>
            </select>
            <div class="invalid-feedback">
              {{ errors.categoryId }}
            </div>
          </div>
        </div>
        <button type="submit" class="btn btn-dark mt-4 ms-5">Add product</button>
      </form>
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>
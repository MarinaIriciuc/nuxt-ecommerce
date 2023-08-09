<script setup>
definePageMeta({
  layout: false,
  middleware: ['auth']
})
useHead({
  title: "My account"
})

const {getSession} = useAuth();
const session = await getSession();

</script>

<template>
  <div>
    <NuxtLayout name="admin">
      <div class="row">
        <div class="col-12">
          <div class="ms-lg-5 m-2 d-flex align-items-center gap-4">
            <img :src="session.user.image" class="img-fluid w-25 h-25" alt="">
            <div>
              <div class="d-flex gap-3 align-items-center">
                <h6 class="m-0">Name:</h6>
                <p class="m-0">{{ session.user.name }}</p>
              </div>
              <div class="d-flex gap-3 align-items-center">
                <h6 class="m-0">Email:</h6>
                <p class="m-0">{{ session.user.email }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>

</style>
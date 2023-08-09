<script setup>
definePageMeta({
  middleware: ['guest']
})
useHead({
  title: "Login"
})

const {signIn, signOut, getSession} = useAuth()
const session = await getSession();

//
// let email = ref('')
// let password = ref('')


// function signInWithCredentials(event) {
//   signIn("credentials", {
//     email: email.value,
//     password: password.value
//   })
// }


</script>

<template>
  <div class="row min-vh-100">
    <div class="col-xl-6 col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center mt-lg-0 mt-5">
      <h3> Welcome Back !</h3>
      <p class="text-secondary">The faster you fill up, the faster you get a product</p>
      <!--      <form @submit.prevent="signInWithCredentials" class="w-100">-->
      <!--        <div class="mt-4">-->
      <!--          <h6>Email</h6>-->
      <!--          <input type="text" v-model="email" class="form-control" placeholder="Enter your email">-->
      <!--        </div>-->
      <!--        <div class="mt-4">-->
      <!--          <h6>Password</h6>-->
      <!--          <input type="password" v-model="password" class="form-control" placeholder="*********">-->
      <!--        </div>-->
      <!--        <button type="submit" class="btn btn-dark w-100 mt-4 rounded-0">Sign In</button>-->
      <!--      </form>-->
      <button @click="signIn('github')" class="btn border border-2 border-secondary fw-semibold w-100 mt-4 rounded-0">
        <span> <Icon name="mdi:github" size="25" class="mb-1 mx-2"/></span>
        Sign In With GitHub
      </button>
      <button @click="signIn('google')" class="btn border border-2 fw-semibold w-100 mt-4 rounded-0">
        <span> <Icon name="ion:logo-google" size="23" class="mb-1 mx-2"/></span>
        Sign In With Google
      </button>
    </div>
    <div class="col-xl-6 col-lg-6 col-12 mt-lg-0 mt-5 d-flex justify-content-center align-items-center">
      <img src="https://i.ibb.co/Nym5Tck/diego-gennaro-Su-EDt1y-Z5-U4-unsplash.jpg"
           class="img-fluid object-fit-cover" alt="">
    </div>
  </div>
</template>

<style scoped>

</style>
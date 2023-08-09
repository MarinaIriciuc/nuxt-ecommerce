<script setup>


const {getSession, signOut} = useAuth();
const session = await getSession();


</script>

<template>


  <nav class="navbar navbar-expand-lg bg-light fixed-top relative">
    <div class="container d-flex justify-content-lg-between justify-content-start"
         style="padding-left: 50px;padding-right: 50px">
      <div>
        <NuxtLink to="/" class="text-black text-decoration-none d-lg-block d-none">
          <img src="https://i.ibb.co/MP5T2rQ/shopping-transparent-background-7.png" style="width: 65px;" alt="">
        </NuxtLink>
      </div>
      <div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav d-flex align-items-lg-center gap-2 mt-lg-0 mt-3">
            <li class="nav-item">
              <NuxtLink class="nav-link active p-0" to="/all">CATEGORIES</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link active p-0" to="/dashboard">DASHBOARD</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link active p-0" to="/cart">
                <Icon name="material-symbols:shopping-cart-rounded" color="black" size="23"/>
              </NuxtLink>
            </li>
            <li @click="signOut" class="nav-item">
              <Icon name="material-symbols:logout" color="black" size="23"/>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </nav>


  <!--  <div class="row">-->
  <!--    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top relative">-->
  <!--      <div class="container" style="padding-left: 50px;padding-right: 50px">-->
  <!--        <NuxtLink to="/" class="text-black text-decoration-none">-->
  <!--          <img src="https://i.ibb.co/MP5T2rQ/shopping-transparent-background-7.png" style="width: 65px;" alt="">-->
  <!--        </NuxtLink>-->
  <!--        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">-->
  <!--          <span class="navbar-toggler-icon"></span>-->
  <!--        </button>-->
  <!--        <div class="d-flex" id="navbarNav">-->
  <!--          <ul class="navbar-nav d-flex align-items-center gap-2">-->
  <!--            <li class="nav-item">-->
  <!--              <NuxtLink class="nav-link active" to="/all">CATEGORIES</NuxtLink>-->
  <!--            </li>-->
  <!--            <li class="nav-item">-->
  <!--              <NuxtLink class="nav-link active" to="/dashboard">DASHBOARD</NuxtLink>-->
  <!--            </li>-->
  <!--            <li class="nav-item">-->
  <!--              <NuxtLink to="/cart">-->
  <!--                <Icon name="material-symbols:shopping-cart-rounded" color="black" size="23"/>-->
  <!--              </NuxtLink>-->
  <!--            </li>-->
  <!--            <li v-if="!session.user" class="nav-item">-->
  <!--              <NuxtLink to="/login">-->
  <!--                <Icon name="ic:baseline-login" color="black" size="23"/>-->
  <!--              </NuxtLink>-->
  <!--            </li>-->
  <!--            <li @click="signOut" v-else class="nav-item">-->
  <!--              <Icon name="material-symbols:logout" color="black" size="23"/>-->
  <!--            </li>-->
  <!--          </ul>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </nav>-->
  <!--  </div>-->

</template>

<style scoped>

</style>
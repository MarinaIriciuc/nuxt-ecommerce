<script setup>
const route = useRoute();
const {signOut, getSession} = await useAuth();
const session = await getSession();
</script>

<template>
  <div
      class="d-flex sidebar flex-column min-vh-100 flex-shrink-0 p-3 px-lg-5 px-md-3 px-sm-1 px-0 mx-0 bg-light border border-0 border-end">
    <span class="fs-4 d-md-block d-none">{{ route.name }}</span>
    <hr class="d-md-block d-none">
    <ul class="nav nav-pills flex-column mb-auto">
      <p class="text-secondary d-md-block d-none">Menu</p>
      <li class="d-flex align-items-center mt-md-2">
        <Icon name="material-symbols:home" size="23"/>
        <NuxtLink to="/" class="nav-link link-dark pb-0 d-md-block d-none">
          <h6>Home</h6>
        </NuxtLink>
      </li>
      <li class="d-flex align-items-center mt-md-2 mt-4">
        <NuxtLink to="/all" class="text-dark">
          <Icon name="carbon:categories" size="23"/>
        </NuxtLink>
        <NuxtLink to="/all" class="nav-link link-dark pb-0 d-md-block d-none">
          <h6>Categories</h6>
        </NuxtLink>
      </li>
      <li class="d-flex align-items-center mt-md-2 mt-4">
        <NuxtLink to="/dashboard" class="text-dark">
          <Icon name="material-symbols:dashboard" size="23"/>
        </NuxtLink>
        <NuxtLink to="/dashboard" class="nav-link link-dark pb-0 d-md-block d-none">
          <h6>Dashboard</h6>
        </NuxtLink>
      </li>
      <li class="d-flex align-items-center mt-md-2 mt-4">
        <NuxtLink to="/add-product" class="text-dark">
          <Icon name="icon-park-outline:ad-product" size="23"/>
        </NuxtLink>
        <NuxtLink to="/add-product" class="nav-link link-dark pb-0 d-md-block d-none">
          <h6>Add product</h6>
        </NuxtLink>
      </li>
      <li class="d-flex align-items-center mt-md-2 mt-4">
        <Icon name="material-symbols:production-quantity-limits-sharp" size="23"/>
        <NuxtLink to="/cart" class="nav-link link-dark pb-0 d-md-block d-none">
          <h6>Cart</h6>
        </NuxtLink>
      </li>
    </ul>
    <hr class="d-md-block d-none">
    <div class="dropdown">
      <p class="text-secondary d-md-block d-none">Other</p>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="d-flex align-items-center mt-2">
          <Icon name="material-symbols:account-circle" size="23"/>
          <NuxtLink to="/settings" class="nav-link link-dark pb-0 d-md-block d-none">
            <h6>My account</h6>
          </NuxtLink>
        </li>
      </ul>
      <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle mt-3 mb-3"
         id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img :src="session.user.image" alt="" width="32" height="32" class="rounded-circle me-2 ">
        <strong class="d-md-block d-none">{{ session.user.name }}</strong>
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><a class="dropdown-item" href="#">Products...</a></li>
        <li>
          <NuxtLink to="/settings" class="dropdown-item ">Settings</NuxtLink>
        </li>
        <li>
          <hr class="dropdown-divider">
        </li>
        <li>
          <NuxtLink @click="signOut" class="dropdown-item">Sign out</NuxtLink>
        </li>
      </ul>
    </div>
  </div>

</template>


<style scoped>
</style>
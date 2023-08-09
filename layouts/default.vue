<script setup>
const {getSession} = useAuth();
const session = await getSession();

</script>

<template>
  <div class="container overflow-x-hidden" style="padding-left: 50px;padding-right: 50px;min-height: 100vh;">
    <Navbar v-if="session.user"/>
    <slot/>
  </div>
  <Footer v-if="session.user"/>
</template>

<style scoped>

</style>
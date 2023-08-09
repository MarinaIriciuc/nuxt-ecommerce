<script setup>

</script>

<template>

  <div class="row" style="margin-top: 130px">
    <div class="col-xl-6 col-lg-6 col-12 px-2">
      <NuxtLink to="/furnitures">
        <div class="img-fluid-container">
          <img src="https://i.ibb.co/h9kSFbB/home-img-1-3de7da0f1e4634169c62.jpg"
               class="img-fluid p-0 object-fit-cover" alt=""/>
          <div class="overlay">
            <h3 class="fw-bolder">Live Comfortably</h3>
          </div>
        </div>
      </NuxtLink>
    </div>
    <div class="col-xl-6 col-lg-6 col-12 mt-lg-0 mt-5 d-flex gap-3 px-2">
      <div class="img-fluid-container" style="flex: 1">
        <NuxtLink to="/skin-care">
          <img src="https://i.ibb.co/28Jjdg1/home-img-2-4daa711cfda65062efd0.jpg"
               class="img-fluid p-0 object-fit-cover" alt="">
          <div class="overlay">
            <h3 class="fw-bolder">Skincare</h3>
          </div>
        </NuxtLink>
      </div>
      <div class="d-flex flex-column gap-3" style="flex: 1">
        <div class="img-fluid-container">
          <NuxtLink to="/kitchen">
            <img src="https://i.ibb.co/QnYBsmh/download-1.jpg" class="img-fluid p-0 object-fit-cover" alt="">
            <div class="overlay">
              <h3 class="fw-bolder">Kitchen</h3>
            </div>
          </NuxtLink>
        </div>
        <div class="img-fluid-container">
          <NuxtLink to="/electronics">
            <img src="https://i.ibb.co/G38YMY9/download.jpg" class="img-fluid p-0 object-fit-cover" alt="">
            <div class="overlay">
              <h3 class="fw-bolder">Electronics</h3>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>





















<!--  <div class="container" style="margin-top: 130px">-->
<!--    <div class="row">-->
<!--      &lt;!&ndash; Primul rand &ndash;&gt;-->
<!--      <div class="col-md-6 col-lg-3 px-2">-->
<!--        <NuxtLink to="/furnitures">-->
<!--          <div class="img-fluid-container">-->
<!--            <img src="https://i.ibb.co/h9kSFbB/home-img-1-3de7da0f1e4634169c62.jpg"-->
<!--                 class="img-fluid p-0 object-fit-cover" alt=""/>-->
<!--            <div class="overlay">-->
<!--              <h3 class="fw-bolder">Live Comfortably</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--        </NuxtLink>-->
<!--      </div>-->

<!--      <div class="col-md-6 col-lg-3 px-2">-->
<!--        <NuxtLink to="/skin-care">-->
<!--          <div class="img-fluid-container">-->
<!--            <img src="https://i.ibb.co/28Jjdg1/home-img-2-4daa711cfda65062efd0.jpg"-->
<!--                 class="img-fluid p-0 object-fit-cover" alt="">-->
<!--            <div class="overlay">-->
<!--              <h3 class="fw-bolder">Skincare</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--        </NuxtLink>-->
<!--      </div>-->

<!--      <div class="col-md-6 col-lg-3 px-2">-->
<!--        <NuxtLink to="/kitchen">-->
<!--          <div class="img-fluid-container">-->
<!--            <img src="https://i.ibb.co/QnYBsmh/download-1.jpg" class="img-fluid p-0 object-fit-cover" alt="">-->
<!--            <div class="overlay">-->
<!--              <h3 class="fw-bolder">Kitchen</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--        </NuxtLink>-->
<!--      </div>-->

<!--      <div class="col-md-6 col-lg-3 px-2">-->
<!--        <NuxtLink to="/electronics">-->
<!--          <div class="img-fluid-container">-->
<!--            <img src="https://i.ibb.co/G38YMY9/download.jpg" class="img-fluid p-0 object-fit-cover" alt="">-->
<!--            <div class="overlay">-->
<!--              <h3 class="fw-bolder">Electronics</h3>-->
<!--            </div>-->
<!--          </div>-->
<!--        </NuxtLink>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->


</template>

<style scoped>
.img-fluid-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 90%;
}

.img-fluid-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: filter 0.3s;
  filter: brightness(70%);
}

.img-fluid-container:hover img {
  filter: brightness(50%);
}

.overlay {
  position: absolute;
  bottom: 10px;
  left: 10px;
//background-color: rgba(0, 0, 0, 0.7); color: white; padding: 5px 10px;
}

</style>
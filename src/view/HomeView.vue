<script setup>
import OnlyNavHeader from '@/component/_layout/OnlyNavHeader.vue';
</script>
<template>
  <OnlyNavHeader />
  <main class="f-w-container">
    <div class="row">
      <div class="col-6 m-auto">
        <img src="@/asset/logo/logo.svg" alt="logo" class="m-auto home-logo" />
        <form></form>
      </div>
    </div>
  </main>
</template>
<style scoped>
.home-logo {
  display: block;
}
</style>

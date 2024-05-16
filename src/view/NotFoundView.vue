<script setup>
import MainHeader from '@/component/_layout/MainHeader.vue';
</script>
<template>
  <MainHeader />
  <main :class="$style['not-found-content']">
    <img src="@/asset/not-found.svg" alt="not found" />
    <h1 class="heading-1">Page not found</h1>
    <p class="sub-heading">
      Go back to
      <RouterLink
        :to="{
          name: 'home',
        }"
        >Home</RouterLink
      >
    </p>
  </main>
</template>
<style module>
.not-found-content {
  height: 68vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
}
</style>

<script setup>
import OnlyNavHeader from '@/component/_layout/OnlyNavHeader.vue';
import BookSearchBar from '@/component/BookSearchBar.vue';
</script>
<template>
  <OnlyNavHeader />
  <main class="f-w-container">
    <div class="row">
      <div class="col-6 m-auto">
        <img src="@/asset/logo/logo.svg" alt="logo" :class="['m-auto', $style['home-logo']]" />
        <BookSearchBar />
      </div>
    </div>
  </main>
</template>
<style module>
.home-logo {
  display: block;
}
</style>

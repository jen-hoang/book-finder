<script setup>
import BookSearchBar from '@/component/BookSearchBar.vue';
</script>
<template>
  <header :class="[$style['main-header'], 'f-w-container d-flex align-center']">
    <div class="row">
      <a href="/" :class="[$style['logo'], 'col-2 d-flex align-center']">
        <img src="@/asset/logo/logo.svg" alt="logo" />
      </a>

      <BookSearchBar class="col-6" />

      <nav class="col-2 d-flex align-center flex-end">
        <a href="/about" class="text-body-large">About</a>
      </nav>
    </div>
  </header>
</template>
<style module>
.main-header {
  height: 9.8rem;
}
.main-header a img {
  display: block;
  max-width: 20rem;
}
.main-header .logo:hover {
  filter: none;
}
</style>

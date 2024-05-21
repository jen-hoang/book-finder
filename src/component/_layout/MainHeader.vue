<script setup>
import BookSearchBar from '@/component/BookSearchBar.vue';
</script>
<template>
  <header :class="[$style['main-header'], 'f-w-container d-flex align-center']">
    <div class="row">
      <RouterLink :to="{ name: 'home' }" :class="[$style['logo'], 'col-3 d-flex align-center']">
        <img src="@/asset/logo.svg" alt="logo" />
      </RouterLink>

      <BookSearchBar :class="[$style['search-bar'], 'col-6']" />

      <nav class="col-3 d-flex align-center flex-end">
        <RouterLink
          :to="{
            name: 'about',
          }"
          class="text-body-large"
          >About</RouterLink
        >
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
  width: 100%;
  max-width: 20rem;
}
.main-header .logo:hover {
  filter: none;
}

/* responsive */
@media screen and (max-width: 1200px) {
  .main-header a img {
    max-width: 16rem;
  }
}
@media (max-width: 992px) {
  .search-bar {
    --width: 7;
  }
  .main-header nav {
    --width: 2;
  }
}
</style>

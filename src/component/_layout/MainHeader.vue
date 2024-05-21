<script setup>
import BookSearchBar from '@/component/BookSearchBar.vue';
</script>
<template>
  <header :class="[$style['main-header'], 'f-w-container row align-center']">
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
@media (max-width: 992px) {
  .search-bar {
    --width: 7;
  }
  .main-header nav {
    --width: 1;
  }
}
@media (max-width: 576px) {
  .main-header {
    height: 15.2rem;
    padding-block: 2rem;
    align-content: space-between;
  }
  .search-bar {
    order: 3;
    --width: 12;
  }
  .logo {
    --width: 8;
  }
  .main-header nav {
    --width: 2;
  }
  .main-header nav a {
    font-size: 1.6rem;
  }
}
</style>

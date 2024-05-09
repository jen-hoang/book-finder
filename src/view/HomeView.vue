<script setup>
import OnlyNavHeader from '@/component/_layout/OnlyNavHeader.vue';
import BookSearchBar from '@/component/BookSearchBar.vue';
</script>
<template>
  <OnlyNavHeader :class="[$style['home-header']]" />
  <main class="f-w-container">
    <div :class="[$style['home-content'], 'row']">
      <div class="col-6 m-auto">
        <img src="@/asset/logo/logo.svg" alt="logo" :class="[$style['home-logo']]" />
        <BookSearchBar />
      </div>
    </div>
  </main>
</template>
<style module>
.home-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}
.home-content {
  height: 80vh;
  align-items: center;
}
.home-logo {
  display: block;
  margin: auto;
  margin-bottom: 3.2rem;
}
</style>

<script setup>
import { useRoute } from 'vue-router';
import MainHeader from '@/component/_layout/MainHeader.vue';
import BookCardList from '@/component/BookCardList.vue';
const route = useRoute();
const { q: searchQuery } = route.query;
</script>
<template>
  <MainHeader />
  <main :class="[$style['search-main'], 'f-w-container row']">
    <section class="col-6 m-auto">
      <BookCardList :searchQuery="searchQuery" />
    </section>
  </main>
</template>
<style module>
.search-main > section:first-child {
  margin-top: 0.8rem;
}
</style>

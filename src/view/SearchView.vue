<script setup>
import { useRoute } from 'vue-router';
import MainHeader from '@/component/_layout/MainHeader.vue';
import BookCardList from '@/component/BookCardList.vue';
const route = useRoute();
const { q: searchQuery } = route.query;
</script>
<template>
  <MainHeader />
  <main :class="[$style['search-main']]">
    <section class="row f-w-container">
      <div class="col-6 m-auto">
        <BookCardList :searchQuery="searchQuery" />
      </div>
    </section>
  </main>
</template>
<style module>
.search-main > section:first-child {
  padding-top: 0.8rem;
  overflow-y: auto;
  max-height: calc(100vh - 9.8rem - 2.4rem);
}
</style>

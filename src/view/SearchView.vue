<script setup>
import { useRoute } from 'vue-router';
import MainHeader from '@/component/_layout/MainHeader.vue';
import BookCardList from '@/component/BookCardList.vue';
const route = useRoute();
const { q: searchQuery } = route.query;
</script>
<template>
  <MainHeader />
  <main>
    <BookCardList :searchQuery="searchQuery" />
  </main>
</template>

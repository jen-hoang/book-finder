<script setup>
import { useRoute } from 'vue-router';
import MainHeader from '@/component/_layout/MainHeader.vue';
const route = useRoute();
const { q: searchQuery } = route.query;
</script>
<template>
  <MainHeader />
  <div class="about">
    <h1>This is an about page</h1>
    {{ searchQuery }}
  </div>
</template>

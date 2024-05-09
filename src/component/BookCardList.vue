<script setup>
import BookCard from '@/component/BookCard.vue';
</script>
<template>
  <ul :class="[$style['book-list']]">
    <li>
      <BookCard />
    </li>
  </ul>
</template>
<style module>
.book-list > li {
  list-style: none;
}
</style>

<script setup>
import BookCard from '@/component/BookCard.vue';
</script>
<template>
  <ul :class="[$style['book-list']]">
    <li>
      <BookCard />
    </li>
    <li>
      <BookCard />
    </li>
    <li>
      <BookCard />
    </li>
    <li>
      <BookCard />
    </li>
  </ul>
</template>
<style module>
.book-list {
  padding: 0;
  padding-bottom: 2.4rem;
}
.book-list > li {
  list-style: none;
  position: relative;
}
/* Divider for each child */
.book-list > li:not(:last-child)::after {
  content: '';
  display: block;
  height: 0.1rem;
  background-color: var(--color-secondary-100);
  margin-block: 0.8rem;
  border-radius: 0.4rem;
}
</style>

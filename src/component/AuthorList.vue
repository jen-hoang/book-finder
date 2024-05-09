<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>
<template>
  <ul :class="[$style['author-list'], 'd-flex']" v-if="list.length > 0">
    By
    <li v-for="author in props.list" :key="author">{{ author }}</li>
  </ul>
</template>
<style module>
.author-list {
  list-style: none;
  gap: 0.2rem;
  padding: 0;
  color: var(--color-secondary-300);
}
.author-list > li:not(:last-child)::after {
  content: ',';
}
</style>

<script setup>
const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
});
</script>
<template>
  <ul :class="[$style['tag-list'], 'd-flex']">
    <li v-for="tag in props.list" :key="tag" class="text-body-small rounded">{{ tag }}</li>
  </ul>
</template>
<style module>
.tag-list {
  list-style: none;
  gap: 0.8rem;
  padding: 0;
  color: var(--color-secondary-300);
}
.tag-list > li {
  border: 0.1rem solid var(--color-secondary-200);
  padding: 0.8rem 1.2rem;
}
</style>

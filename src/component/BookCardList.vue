<script setup>
import BookCard from '@/component/BookCard.vue';
const emit = defineEmits(['click:item']);

const props = defineProps({
  list: Array,
  activeIndex: Number,
});

const clickItem = (item, index) => {
  emit('click:item', {
    item,
    index,
  });
};
const isItemActive = (index) => {
  return index == props.activeIndex;
};
</script>
<template>
  <ul :class="[$style['book-list']]" v-bind="$attrs">
    <li v-for="(item, index) in props.list" :key="index" @click="clickItem(item, index)">
      <BookCard :value="item" :is-active="isItemActive(index)" />
    </li>
  </ul>
</template>
<style module>
.book-list {
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
  margin-inline: 1.6rem;
  margin-block: 1.6rem;
  border-radius: 0.4rem;
}
</style>

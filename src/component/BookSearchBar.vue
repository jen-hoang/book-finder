<script setup>
import BaseIcon from '@/component/BaseIcon.vue';
import { ref } from 'vue';
const searchInput = ref('');
</script>
<template>
  <form>
    <div :class="[$style['input-container'], 'rounded']">
      <BaseIcon name="search" :class="$style['main-icon']" />
      <input v-model="searchInput" placeholder="Enter book title, author, etc. " />
      <BaseIcon name="cancel" :class="$style['clear-icon']" />
    </div>
  </form>
</template>
<style module>
.input-container {
  height: 5.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  padding: 1.6rem;
  border: 1px solid var(--color-secondary-200);
}
.input-container input {
  flex-grow: 1;
  border: none;
  background-color: transparent;
}
.input-container input:focus {
  outline: none;
}
.input-container:focus-within {
  border: 0.2rem solid var(--color-active);
}
.input-container:focus-within .main-icon {
  color: var(--color-active);
}
.input-container .clear-icon {
  color: var(--color-secondary-300);
  cursor: pointer;
}
</style>

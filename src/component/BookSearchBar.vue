<script setup>
import BaseIcon from '@/component/BaseIcon.vue';
import { ref, computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const route = useRoute();
onMounted(() => {
  // if current route is search page, set the search input value
  if (route.name === 'search') {
    searchInput.value = route.query.q;
  }
});
const searchInput = ref('');
const isInputClearable = computed(() => searchInput.value.length > 0);
const clearInput = () => {
  searchInput.value = '';
};
const router = useRouter();
const submitSearch = () => {
  const value = searchInput.value.trim();
  if (value.length > 0) {
    router.push({ name: 'search', query: { q: value } });
  }
};
</script>
<template>
  <form @submit.prevent="submitSearch">
    <div :class="[$style['input-container'], 'rounded']">
      <BaseIcon name="search" :class="$style['main-icon']" />
      <input v-model="searchInput" placeholder="Enter book title, author, etc. " />
      <BaseIcon
        name="cancel"
        :class="$style['clear-icon']"
        v-if="isInputClearable"
        @click="clearInput"
      />
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
  border: 0.1rem solid var(--color-secondary-200);
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

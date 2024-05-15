<script setup>
import BaseIcon from '@/component/BaseIcon.vue';
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
});
</script>
<template>
  <button :class="[$style['base-icon-button'], 'rounded']">
    <BaseIcon :name="props.icon" />
  </button>
</template>
<style module>
.base-icon-button {
  padding: 0.4rem;
  border: 0.1rem solid var(--color-secondary-200);
  color: var(--color-secondary-500);
  background-color: inherit;
  transition: all 0.4s;
}
.base-icon-button:hover {
  border-color: var(--color-secondary-500);
  box-shadow: 0.4rem 0.4rem var(--color-secondary-700);
  transform: translate(-0.4rem, -0.4rem);
}
.base-icon-button:active {
  transform: translate(0, 0);
  box-shadow: none;
}
.base-icon-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 0.2rem var(--color-active);
}
</style>

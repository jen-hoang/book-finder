<script setup>
import { computed } from 'vue';
const props = defineProps({
  name: String,
  size: {
    type: String,
    default: 'normal',
    validator(value) {
      // The value must match one of these strings
      return ['small', 'normal', 'large'].includes(value);
    },
  },
});
const computedSize = computed(() => {
  const sizeList = {
    small: '1.6rem',
    normal: '2.4rem',
    large: '3.2rem',
  };
  return sizeList[props.size];
});
const iconName = computed(() => {
  const nameList = {
    search: 'search-normal-2',
    cancel: 'x-circle',
  };
  return nameList[props.name];
});
</script>
<template>
  <i :class="['iconsax', $style['base-icon']]" :icon-name="iconName"></i>
</template>
<style module>
.base-icon {
  color: var(--color-secondary-500);
  font-size: v-bind(computedSize);
}
</style>

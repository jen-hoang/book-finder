<script setup>
import { computed, useAttrs } from 'vue';
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
    close: 'x',
  };
  return nameList[props.name];
});
const attrs = useAttrs();
const hasClick = computed(() => {
  return !!attrs.onClick;
});
</script>
<template>
  <i
    :class="[
      'iconsax',
      $style['base-icon'],
      {
        clickable: hasClick,
      },
    ]"
    :icon-name="iconName"
    v-bind="$attrs"
  ></i>
</template>
<style module>
.base-icon {
  color: var(--color-secondary-500);
  font-size: v-bind(computedSize);
}
</style>

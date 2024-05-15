<script setup>
import { computed } from 'vue';
const props = defineProps({
  link: String,
});
const linkProps = computed(() => {
  if (!props.link) return {};
  return {
    href: props.link,
    target: '_blank',
  };
});
const currentTag = computed(() => {
  return props.link ? 'a' : 'button';
});
</script>
<template>
  <component
    :is="currentTag"
    v-bind="linkProps"
    :class="[$style['base-button'], 'text-label rounded']"
  >
    <span></span>
    <span :class="[$style['content'], 'text-label']">
      <slot></slot>
    </span>
  </component>
</template>
<style module>
.base-button {
  display: inline-block;
  position: relative;
  padding: 0;
  border: 0;
  background-color: var(--color-primary);
}
.base-button > span {
  border: 0.16rem solid var(--color-secondary-600);
  border-radius: 0.4rem;
  transition: all 0.4s;
}
.base-button .content {
  display: block;
  background-color: var(--color-secondary);
  color: var(--color-secondary-600);
  text-align: center;
  padding: 1.2rem 2.4rem;
}
.base-button:hover {
  filter: none;
}
.base-button:hover .content {
  transform: translate(-0.8rem, -0.8rem);
}
.base-button > span:first-child {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 0.16rem solid var(--color-secondary-600);
}
.base-button:active .content {
  filter: brightness(1.1);
  transform: translate(0, 0);
}
.base-button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 0.2rem var(--color-active);
  filter: brightness(1.1);
}
</style>

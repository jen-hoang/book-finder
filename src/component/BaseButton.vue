<template>
  <button :class="[$style['base-button'], 'text-label rounded']">
    <span></span>
    <span :class="$style['content']">
      <slot></slot>
    </span>
  </button>
</template>
<style module>
.base-button {
  position: relative;
  padding: 0;
  border: 0;
  background-color: var(--color-primary);
}
.base-button > span {
  display: block;
  border: 0.16rem solid var(--color-secondary-600);
  border-radius: 0.4rem;
  transition: all 0.4s;
}
.base-button .content {
  background-color: var(--color-secondary);
  padding: 1.2rem 2.4rem;
}
.base-button:hover .content {
  transform: translate(-0.8rem, -0.8rem);
}
.base-button > span:first-child {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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

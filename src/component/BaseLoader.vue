<template>
  <div :class="$style['loader']"></div>
</template>
<style module>
.loader {
  margin-block: 3.2rem;
  --d: 2rem;
  --loader-width: 0.06rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  color: var(--color-secondary);

  box-shadow:
    calc(1 * var(--d)) calc(0 * var(--d)) 0 calc(0 * var(--loader-width)),
    calc(0.707 * var(--d)) calc(0.707 * var(--d)) 0 calc(1 * var(--loader-width)),
    calc(0 * var(--d)) calc(1 * var(--d)) 0 calc(2 * var(--loader-width)),
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 calc(3 * var(--loader-width)),
    calc(-1 * var(--d)) calc(0 * var(--d)) 0 calc(4 * var(--loader-width));
  animation: spinner 0.9s infinite steps(8);
}
@keyframes spinner {
  100% {
    transform: rotate(1turn);
  }
}
</style>

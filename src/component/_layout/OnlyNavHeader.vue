<script setup></script>
<template>
  <header class="f-w-container">
    <nav :class="$style['nav-bar']">
      <a href="/about" class="sub-heading">About</a>
    </nav>
  </header>
</template>
<style module>
.nav-bar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 9.8rem;
  margin: auto;
}
</style>

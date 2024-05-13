<template>
  <section :class="[$style['empty-result']]">
    <img src="@/asset/book-question.svg" />
    <h1 class="heading-1">We didn't find any results.</h1>
    <p class="sub-heading">Please try another keyword.</p>
  </section>
</template>
<style module>
.empty-result h1,
.empty-result p {
  text-align: center;
}
.empty-result h1 {
  color: var(--color-secondary-600);
}
.empty-result p {
  color: var(--color-secondary-300);
  margin-top: 0.4rem;
}
.empty-result img {
  width: 100%;
  max-width: 30rem;
  margin: auto;
  display: block;
}
</style>

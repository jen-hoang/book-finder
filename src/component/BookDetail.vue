<script setup>
import { computed } from 'vue';
import BaseIconButton from '@/component/BaseIconButton.vue';
import AuthorList from '@/component/AuthorList.vue';
import TagList from '@/component/TagList.vue';
import BaseButton from '@/component/BaseButton.vue';

const emit = defineEmits(['click:close']);
const close = () => {
  emit('click:close');
};

const props = defineProps({
  value: Object,
});
const value = computed(() => props.value);
</script>
<template>
  <article :class="[$style['book-detail'], 'rounded']">
    <BaseIconButton icon="close" :class="[$style['close-button']]" @click="close" />
    <header class="d-flex">
      <figure>
        <img :src="value.largeImg" alt="book cover" class="rounded" />
      </figure>
      <div :class="[$style['book-metadata']]">
        <div>
          <h1 class="heading-1">
            {{ value.title }}
          </h1>
          <p class="text-body-large">
            {{ value.subtitle }}
          </p>
          <AuthorList :list="value.authors" class="text-body-small" />
        </div>
        <TagList :list="value.categories" />
      </div>
    </header>
    <section :class="$style['description']">
      <h2 class="sub-heading text-weight-bold">Overview</h2>
      <p class="text-body-medium">{{ value.description }}</p>
    </section>
    <section :class="[$style['action-button']]">
      <BaseButton :link="value.previewLink">Learn more on Google Book</BaseButton>
    </section>
  </article>
</template>
<style module>
.book-detail {
  background-color: var(--color-primary-100);
  padding: 2.4rem;
  border: 0.1rem solid var(--color-secondary-600);
  min-height: calc(100vh - 8.8rem - 2.4rem);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
.close-button {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
}
.book-detail header {
  gap: 1.6rem;
}
.book-detail figure {
  flex-basis: 30%;
}
.book-detail figure img {
  border: 0.1rem solid var(--color-secondary-100);
  width: 100%;
}
.description h2 {
  margin-bottom: 0.4rem;
}
.book-metadata {
  flex-basis: 70%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.book-metadata p {
  margin-bottom: 0.4rem;
  color: var(--color-secondary-500);
}
.action-button {
  margin-inline: auto;
}
</style>

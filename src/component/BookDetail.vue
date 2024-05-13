<script setup>
import BaseIconButton from '@/component/BaseIconButton.vue';
import AuthorList from '@/component/AuthorList.vue';
import TagList from '@/component/TagList.vue';
import BaseButton from '@/component/BaseButton.vue';
const emit = defineEmits(['click:close']);
const close = () => {
  emit('click:close');
};
const value = {
  title: 'Design Patterns ksj fsk ksj fsd;f sfkk sjkK sfk sjf f skfjsk',
  subtitle: 'Elements of Reusable Object-Oriented Software',
  author: ['Erich Gamma', 'Richard Helm', 'Ralph Johnson', 'John Vlissides'],
  description:
    'Design Patterns: Elements of Reusable Object-Oriented Software is a software engineering book describing software design patterns. The book was written by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides, with a foreword by Grady Booch.',
  img: 'http://books.google.com/books/content?id=MH48bnzN0LUC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE72xgWwBqtlipUScV0UqtxOL-yq0cU4AM_tQRy5-MUa4N_Xz6D1Gq_z2SSH8dYWNvwj0j-9_O78gKdmD6Cmy22ibMDnDmLJqdObTcAX34F-KcJKjuXxqSQU-o0l-CeBYWbzE5JKs&source=gbs_api',
  categories: ['Computers', 'Software engineering'],
};
</script>
<template>
  <article :class="[$style['book-detail'], 'rounded']">
    <BaseIconButton icon="close" :class="[$style['close-button']]" @click="close" />
    <header class="d-flex">
      <figure>
        <img :src="value.img" alt="book cover" class="rounded" />
      </figure>
      <div :class="[$style['book-metadata']]">
        <div>
          <h1 class="heading-1">
            {{ value.title }}
          </h1>
          <p class="text-body-large">
            {{ value.subtitle }}
          </p>
          <AuthorList :list="value.author" class="text-body-small" />
        </div>
        <TagList :list="value.categories" />
      </div>
    </header>
    <section :class="$style['description']">
      <h2 class="sub-heading text-weight-bold">Overview</h2>
      <p class="text-body-medium">{{ value.description }}</p>
    </section>
    <section>
      <BaseButton :class="[$style['action-button'], 'm-auto']"
        >Learn more on Google Book</BaseButton
      >
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
  width: 45%;
}
.book-detail figure img {
  border: 0.1rem solid var(--color-secondary-100);
  width: 100%;
}
.description h2 {
  margin-bottom: 0.4rem;
}
.book-metadata {
  margin-top: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.book-metadata p {
  margin-bottom: 0.4rem;
  color: var(--color-secondary-500);
}
.action-button {
  display: block;
}
</style>

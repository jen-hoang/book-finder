<script setup>
import AuthorList from '@/component/AuthorList.vue';

const value = {
  title: 'Design Patterns',
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
    <figure>
      <img :src="value.img" alt="book cover" class="rounded" />
    </figure>
    <header class="d-flex">
      <h1 class="heading-1">
        {{ value.title }}
      </h1>
      <p class="sub-heading-2">
        {{ value.subtitle }}
      </p>
      <AuthorList :list="value.author" />
    </header>
  </article>
</template>
<style module>
.book-detail {
  background-color: var(--color-primary-100);
  padding: 2.4rem;
  border: 0.1rem solid var(--color-secondary-600);
}
.book-detail header {
  flex-direction: column;
  gap: 1.6rem;
}
</style>

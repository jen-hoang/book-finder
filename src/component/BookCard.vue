<script setup>
import AuthorList from '@/component/AuthorList.vue';
import TagList from '@/component/TagList.vue';
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
  <article :class="[$style['book-card'], 'd-flex']" tabindex="1">
    <figure>
      <img :src="value.img" alt="book cover" class="rounded" />
    </figure>

    <div :class="[$style['content'], 'd-flex']">
      <header class="d-flex">
        <h2 class="heading-2">
          {{ value.title }}
        </h2>
        <p class="text-body-medium">
          {{ value.subtitle }}
        </p>
        <AuthorList :list="value.author" class="text-body-small" />
      </header>

      <section>
        <p class="text-body-medium">{{ value.description }}</p>
      </section>
      <section>
        <TagList :list="value.categories" />
      </section>
    </div>
  </article>
</template>
<style module>
.book-card {
  gap: 1.6rem;
  padding: 1.6rem;
  cursor: pointer;
  border-radius: 0.4rem;
  transition:
    transform 0.3s,
    box-shadow 0.3s,
    background-color 0.1s;
}
.book-card:hover {
  padding-block: 1.5rem;
  border: 0.1rem solid var(--color-secondary-600);
  background-color: var(--color-primary-100);
  transform: translate(-0.8rem, -0.8rem);
  box-shadow: 0.8rem 0.8rem 0rem var(--color-secondary-700);
}
.book-card:active {
  transform: translate(0, 0);
  box-shadow: none;
}
.book-card:focus-visible {
  outline: none;
  box-shadow: 0 0 0 0.2rem var(--color-active);
}
.book-card figure img {
  border: 0.1rem solid var(--color-secondary-100);
}
.content {
  flex-direction: column;
  gap: 0.8rem;
}
.content > header {
  flex-direction: column;
  gap: 0.4rem;
}
.content > header p {
  color: var(--color-secondary-500);
}
/* paragraph only limit to 3 lines */
.content p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

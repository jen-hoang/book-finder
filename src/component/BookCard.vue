<script setup>
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
  <article :class="['d-flex']">
    <figure>
      <img :src="value.img" alt="book cover" />
    </figure>

    <section>
      <h2 class="heading-2">{{ value.title }}</h2>
      <p class="text-body-large">{{ value.subtitle }}</p>
      <!-- Author -->
      <ul>
        By
        <li v-for="author in value.author" :key="author">
          {{ author }}
        </li>
      </ul>
      <ul>
        <li v-for="category in value.categories" :key="category">
          {{ category }}
        </li>
      </ul>
      <p class="text-body-medium">{{ value.description }}</p>
    </section>
  </article>
</template>

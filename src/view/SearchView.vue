<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import MainHeader from '@/component/_layout/MainHeader.vue';
import BookCardList from '@/component/BookCardList.vue';
import BookDetail from '@/component/BookDetail.vue';
const route = useRoute();
const { q: searchQuery } = route.query;
const showBookDetail = ref(true);
</script>
<template>
  <MainHeader />
  <main
    :class="[
      $style['search-main'],
      {
        'f-w-container row': showBookDetail,
        [$style['show-detail']]: showBookDetail,
      },
    ]"
  >
    <section
      :class="[
        {
          'row f-w-container': !showBookDetail,
          'col-5': showBookDetail,
        },
      ]"
    >
      <div
        :class="[
          {
            'col-6 m-auto': !showBookDetail,
          },
        ]"
      >
        <BookCardList :searchQuery="searchQuery" />
      </div>
    </section>
    <section v-if="showBookDetail" class="col-7">
      <BookDetail />
    </section>
  </main>
</template>
<style module>
.search-main > section:first-child {
  padding-top: 0.8rem;
  overflow-y: auto;
  max-height: calc(100vh - 9.8rem - 2.4rem);
}
.show-detail > section:first-child {
  padding-left: 0.8rem;
  padding-right: 2.4rem;
}
</style>

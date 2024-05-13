<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import MainHeader from '@/component/_layout/MainHeader.vue';
import BookCardList from '@/component/BookCardList.vue';
import BookDetail from '@/component/BookDetail.vue';
const route = useRoute();
const { q: searchQuery } = route.query;
const showBookDetail = ref(false);

const expandBookDetail = (item) => {
  console.log('expandBookDetail', item);
  showBookDetail.value = true;
};
const closeBookDetail = () => {
  showBookDetail.value = false;
};
</script>
<template>
  <MainHeader />
  <main
    :class="[
      $style['search-main'],
      {
        'f-w-container row': showBookDetail,
        [$style['expanded']]: showBookDetail,
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
        <BookCardList :searchQuery="searchQuery" @click:item="expandBookDetail" />
      </div>
    </section>
    <Transition name="slide-fade" :class="$style['detail-transition']">
      <section v-show="showBookDetail" class="col-7">
        <BookDetail @click:close="closeBookDetail" />
      </section>
    </Transition>
  </main>
</template>
<style module>
.search-main > section {
  overflow-y: auto;
}
.search-main > section:first-child {
  padding-top: 1.2rem;
  overflow-y: auto;
  max-height: calc(100vh - 9.8rem - 2.4rem);
  transition: transform 0.6s;
}
.expanded > section:first-child {
  transform: translateX(-1.6rem);
  padding-left: 0.8rem;
  padding-right: 2rem;
}
.detail-transition {
  --translate-x: 4.8rem;
}
</style>

<script setup>
import { ref, onMounted, watch } from 'vue';
import MainHeader from '@/component/_layout/MainHeader.vue';
import BookCardList from '@/component/BookCardList.vue';
import BookDetail from '@/component/BookDetail.vue';
import { formatSearch } from '@/api/book-format';

const props = defineProps({
  query: String,
});
const maxLimit = 20;
const isLoadingResult = ref(false);
const searchResult = ref({});
const getSearchResult = async () => {
  isLoadingResult.value = true;
  try {
    // fetch search result
    const query = props.query;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=${maxLimit}`,
    );
    const data = await response.json();
    searchResult.value = formatSearch(data);
  } catch (error) {
    console.error(error);
  } finally {
    isLoadingResult.value = false;
  }
};

const currentActiveIndex = ref(0);
const activeItem = ref({});
onMounted(() => {
  getSearchResult();
});

watch(
  () => props.query,
  () => {
    getSearchResult();
  },
);

const showBookDetail = ref(false);

const expandBookDetail = ({ item, index }) => {
  currentActiveIndex.value = index;
  activeItem.value = item;
  showBookDetail.value = true;
};
const closeBookDetail = () => {
  currentActiveIndex.value = -1;
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
        <BookCardList
          :list="searchResult.items"
          @click:item="expandBookDetail($event)"
          :active-index="currentActiveIndex"
        />
      </div>
    </section>
    <Transition name="slide-fade" :class="$style['detail-transition']">
      <section v-show="showBookDetail" class="col-7">
        <BookDetail :value="activeItem" @click:close="closeBookDetail" />
      </section>
    </Transition>
  </main>
</template>
<style module>
.search-main > section {
  overflow-y: auto;
  max-height: calc(100vh - 9.8rem - 1.2rem);
}
.search-main > section:first-child {
  padding-top: 1.2rem;
  overflow-y: auto;

  transition: transform 0.6s;
}
.expanded {
  --base-gap: 0.4rem;
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

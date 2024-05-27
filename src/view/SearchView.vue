<script setup>
import { ref, onMounted, watch, computed } from 'vue';
import MainHeader from '@/component/_layout/MainHeader.vue';
import BookCardList from '@/component/BookCardList.vue';
import BookDetail from '@/component/BookDetail.vue';
import BaseLoader from '@/component/BaseLoader.vue';
import EmptyResult from '@/component/EmptyResult.vue';
import { searchBook } from '@/api/book-request';
import { formatSearch } from '@/api/book-format';
import { handleScroll } from '@/util/scroll';
import { useActiveIndexRef, useBooleanRef, useScrollListRef } from '@/composable/use-ref';

// Define props
const props = defineProps({
  query: String,
});

// Define constants
const maxLimit = 20;
const isLoadingResult = ref(false);

// Search result list
const {
  list: searchResult,
  resetList: resetSearchResult,
  addItem: addSearchResult,
} = useScrollListRef();
const isEmptyResult = computed(() => searchResult.value.length == 0 && !isLoadingResult.value);
const getSearchResult = async () => {
  if (isLoadingResult.value) return;
  isLoadingResult.value = true;
  try {
    // fetch search result
    const query = props.query;
    const startIndex = searchResult.value.length;
    const data = await searchBook({
      query,
      startIndex,
      maxLimit,
    });
    addSearchResult(formatSearch(data));
  } finally {
    isLoadingResult.value = false;
  }
};
const resetResult = () => {
  resetSearchResult();
  resetActiveIndex();
};

onMounted(() => {
  getSearchResult();
});
const getSearchResultOnScroll = handleScroll(getSearchResult);

watch(
  () => props.query,
  () => {
    resetResult();
    getSearchResult();
  },
);

// Active item and display book detail
const {
  list: currentActiveIndex,
  resetIndex: resetActiveIndex,
  setIndex: setActiveIndex,
} = useActiveIndexRef();

const activeItem = ref({});
const {
  value: showBookDetail,
  setTrue: displayBookDetail,
  setFalse: hideBookDetail,
} = useBooleanRef();

const expandBookDetail = ({ item, index }) => {
  activeItem.value = item;
  setActiveIndex(index);
  displayBookDetail();
};
const closeBookDetail = () => {
  resetActiveIndex();
  hideBookDetail();
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
      @scroll="getSearchResultOnScroll"
    >
      <div
        :class="[
          {
            'col-6 m-auto': !showBookDetail,
          },
        ]"
      >
        <BookCardList
          :list="searchResult"
          @click:item="expandBookDetail($event)"
          :active-index="currentActiveIndex"
        />
        <div v-if="isLoadingResult">
          <BaseLoader class="m-auto" />
        </div>
        <div :class="[$style['empty-list'], 'm-auto d-flex']">
          <EmptyResult v-if="isEmptyResult" />
        </div>
      </div>
    </section>
    <Transition name="slide-fade" :class="$style['detail-transition']">
      <section v-show="showBookDetail" class="col-7" @click.self="closeBookDetail">
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
  padding-top: 1.6rem;
  overflow-y: auto;
  transition: transform 0.6s;
}
.search-main .empty-list {
  height: 56vh;
  align-items: center;
  justify-content: center;
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
/* responsive */
@media (max-width: 992px) {
  .search-main > section:first-child > div {
    --width: 8;
  }
}
@media (max-width: 780px) {
  .search-main > section:first-child > div {
    --width: 10;
  }
}
@media (max-width: 576px) {
  .search-main > section {
    max-height: calc(100vh - 14.4rem - 1.2rem);
  }
  .search-main > section:first-child > div {
    --width: 12;
  }
  .expanded > section:first-child {
    --width: 12;
    padding-inline: 0;
    transform: translateX(0rem);
  }
  .expanded > section:last-child {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
    max-height: 100vh;
    background-color: rgba(17, 34, 31, 80%);
    overflow-y: auto;
    padding-block: 2.4rem;
  }
}
</style>

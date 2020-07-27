<template>
  <section class="contents">
    <ul class="contents__list">
      <li v-for="(item, index) in contents" :key="index" class="contents__container">
        <ContentComponent :content="item" />
      </li>
    </ul>
    <div class="contents__bottom-area">
      <!-- FIXME: Replace skelton screen from loading -->
      <img
        v-if="contentsFetchState === ContentsFetchState.loading"
        class="contents__loading"
        :src="require('@/assets/no-index/spinner-green.gif')"
      />
      <p v-else-if="contentsFetchState === ContentsFetchState.all" class="contents__showed">
        <span class="contents__showed-text">{{ showAllText }}</span>
      </p>
      <BlueButton v-else :text="moreText" @click="clickMore" />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType, SetupContext } from '@vue/composition-api';
import ContentComponent from '@/components/molecules/content/index.vue';
import { ContentSummary, ContentsFetchState } from '@/types/api/content';
import BlueButton from '@/components/atoms/button/buttonTag/blue.vue';

export default defineComponent({
  components: {
    ContentComponent,
    BlueButton,
  },
  props: {
    contents: {
      type: Array as PropType<ContentSummary[]>,
      default: [],
    },
    contentsFetchState: {
      type: String as PropType<ContentsFetchState>,
      default: ContentsFetchState.loading,
    },
    moreText: {
      type: String,
      default: 'もっと見る',
    },
    showAllText: {
      type: String,
      default: 'すべて表示しています',
    },
  },
  setup(_, ctx: SetupContext) {
    const clickMore = () => {
      ctx.emit('click-more');
    };
    return {
      ContentsFetchState,
      clickMore,
    };
  },
});
</script>
<style lang="scss" scoped>
.contents {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--size-sp-safe-space) var(--size-sp-safe-space) 3.2rem;
  background-color: var(--color-white-darkest);
  &__list {
    max-width: var(--size-card-max-width);
  }
  &__container {
    & + & {
      padding-top: var(--size-sp-safe-space);
    }
  }
  &__bottom-area {
    $base-bottom-height: 5.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: var(--size-card-max-width);
    height: calc(var(--size-sp-safe-space) + #{$base-bottom-height});
    padding-top: var(--size-sp-safe-space);
  }
  &__loading {
    width: 3.6rem;
    height: 3.6rem;
  }
  &__showed-text {
    color: #7e7f7f;
  }
}
</style>

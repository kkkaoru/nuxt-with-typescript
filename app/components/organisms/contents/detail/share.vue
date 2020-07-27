<template>
  <div>
    <p class="share-text">この投稿をシェアする</p>
    <ul class="content-share">
      <li class="content-share__container">
        <ShareTwitter :text="labels.twitter" :link="links.twitter" />
      </li>
      <li class="content-share__container">
        <ShareLine :text="labels.line" :link="links.line" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { SnsShareLabels, SnsShareLinks } from './types';
import ShareTwitter from '@/components/molecules/sns/share-button/twitter.vue';
import ShareLine from '@/components/molecules/sns/share-button/line.vue';

export default defineComponent({
  components: {
    ShareTwitter,
    ShareLine,
  },
  props: {
    labels: {
      type: Object as PropType<SnsShareLabels>,
    },
    links: {
      type: Object as PropType<SnsShareLinks>,
    },
  },
});
</script>
<style lang="scss" scoped>
.content-share {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: calc(var(--size-sp-safe-space) + var(--size-pc-content-width));
  padding: 4rem var(--size-sp-safe-space) 0;
  @include md {
    justify-content: flex-start;
    padding-top: 3.2rem;
  }
  &__container {
    & + & {
      @include md {
        padding-left: var(--size-sp-safe-space);
      }
    }
  }
}
.share-text {
  padding-top: 3.2rem;
  text-align: center;
}
</style>

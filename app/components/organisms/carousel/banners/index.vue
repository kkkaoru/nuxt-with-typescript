<template>
  <section class="carousel">
    <div v-if="hasMultipleBanners" class="carousel__inner">
      <FlickingWraper :options="bannerOptions" :plugins="plugins">
        <BannerComponent v-for="banner in banners" :key="banner.id" :banner="banner" />
      </FlickingWraper>
      <div class="carousel__prev">
        <ArrowButton @click="prev" />
      </div>
      <div class="carousel__next">
        <ArrowButton direction="right" @click="next" />
      </div>
    </div>
    <div v-else class="carousel__inner--only-one">
      <BannerComponent v-if="firstBanner" :banner="firstBanner" />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { AutoPlay } from '@egjs/flicking-plugins';
import { Plugin } from '@egjs/flicking';
import { userCarouselController } from '../uses/';
import { bannerOptions, commonAutoPlayOptions } from '@/utils/carousel';
import { Banner } from '@/types/banner';
import FlickingWraper from '@/components/molecules/flicking/index.vue';
import BannerComponent from '@/components/atoms/banner/index.vue';
import ArrowButton from '@/components/atoms/button/arrow/round.vue';

export default defineComponent({
  components: {
    FlickingWraper,
    BannerComponent,
    ArrowButton,
  },
  props: {
    banners: {
      type: Array as PropType<Banner[]>,
      default: () => [] as Banner[],
    },
  },
  setup(props) {
    const hasMultipleBanners = computed(() => props.banners.length > 1);
    const firstBanner = computed(() => (props.banners.length >= 1 ? props.banners[0] : null));
    const { controller, next, prev } = userCarouselController();
    const plugins = [new AutoPlay(commonAutoPlayOptions, 'NEXT'), controller] as Plugin[];
    return {
      bannerOptions,
      plugins,
      next,
      prev,
      hasMultipleBanners,
      firstBanner,
    };
  },
});
</script>
<style lang="scss" scoped>
@import '../mixins.scss';
$button-top-position: 15.5rem;

.carousel {
  position: relative;
  height: 21.2rem;
  padding: 1.6rem 0 1.6rem;
  overflow: hidden;
  background-color: var(--color-white);
  @include md {
    height: var(--height-carousel);
  }
  &__inner {
    height: 100%;
    &--only-one {
      display: flex;
      justify-content: center;
      height: 100%;
    }
  }
  &__container {
    display: flex;
    justify-content: center;
  }
  &__prev {
    @include prev-button-position($button-top-position, 1.6rem);
    @include show-only-pc;
  }
  &__next {
    @include next-button-position($button-top-position, 1.6rem);
    @include show-only-pc;
  }
}
</style>

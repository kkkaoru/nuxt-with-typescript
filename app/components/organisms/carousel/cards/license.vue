<template>
  <section class="carousel--license-card">
    <div v-if="hasMultipleLicense" class="carousel--license-card__inner">
      <FlickingWraper :options="licenseCardOptions" :plugins="plugins" flicking-type="card">
        <div v-for="license in licenses" :key="license.slug" class="carousel--license-card__container">
          <FanclubCard
            :fanclub="license.fanclub"
            :overwrite-name="license.name"
            :overwrite-description="license.description"
          >
            <LicenseButtons :licenses="[license]" :prefix="prefix" :is-login="isLogin" />
          </FanclubCard>
        </div>
      </FlickingWraper>
      <div class="carousel--license-card__prev">
        <ArrowButton @click="prev" />
      </div>
      <div class="carousel--license-card__next">
        <ArrowButton direction="right" @click="next" />
      </div>
    </div>
    <div v-else class="carousel--license-card__inner">
      <FanclubCard
        :fanclub="firstLicense.fanclub"
        :overwrite-name="firstLicense.name"
        :overwrite-description="firstLicense.description"
      >
        <LicenseButtons :licenses="[firstLicense]" :prefix="prefix" :is-login="isLogin" />
      </FanclubCard>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { AutoPlay } from '@egjs/flicking-plugins';
import { Plugin } from '@egjs/flicking';
import { userCarouselController } from '../uses/';
import { licenseCardOptions, commonAutoPlayOptions } from '@/utils/carousel';
import { License } from '@/types/api/license';
import FlickingWraper from '@/components/atoms/flicking/index.vue';
import FanclubCard from '@/components/molecules/fan-club/card/for-carousel.vue';
import LicenseButtons from '@/components/molecules/license/buttons.vue';
import ArrowButton from '@/components/atoms/button/arrow/round.vue';

export default defineComponent({
  components: {
    FlickingWraper,
    FanclubCard,
    LicenseButtons,
    ArrowButton,
  },
  props: {
    licenses: {
      type: Array as PropType<License[]>,
      default: () => [] as License[],
    },
    prefix: {
      type: String,
      default: '',
    },
    isLogin: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const hasMultipleLicense = computed(() => props.licenses.length > 1);
    const firstLicense = computed(() => (props.licenses.length >= 1 ? props.licenses[0] : null));
    const { controller, next, prev } = userCarouselController();
    const plugins = [new AutoPlay(commonAutoPlayOptions, 'NEXT'), controller] as Plugin[];
    return {
      licenseCardOptions,
      plugins,
      next,
      prev,
      hasMultipleLicense,
      firstLicense,
    };
  },
});
</script>
<style lang="scss" scoped>
@import '../mixins.scss';
$button-top-position: 15.5rem;

.carousel--license-card {
  height: var(--size-card-fanclub);
  overflow: hidden;
  background-color: var(--color-white);
  &__inner {
    position: relative;
    width: 100%;
    max-width: calc(var(--size-sp-safe-space) + var(--size-pc-content-width));
    height: 100%;
    margin: 0 auto;
    padding: 0 var(--size-sp-safe-space);
  }
  &__container {
    width: 100%;
    height: 100%;
  }
  &__prev {
    @include prev-button-position($button-top-position, var(--size-sp-safe-space));
  }
  &__next {
    @include next-button-position($button-top-position, var(--size-sp-safe-space));
  }
}
</style>

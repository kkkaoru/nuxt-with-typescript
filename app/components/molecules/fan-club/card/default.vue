<template>
  <div class="fanclub">
    <div :class="innerClassName">
      <nuxt-link v-if="linkTo" :to="linkTo">
        <FanclubCardDetail
          :cover-image-url="fanclub.coverImageUrl"
          :icon-url="fanclub.iconUrl"
          :name="fanclub.name"
          :description="fanclub.description"
          :is-smaller-title="isSmallerTitle"
        />
      </nuxt-link>
      <FanclubCardDetail
        v-else
        :cover-image-url="fanclub.coverImageUrl"
        :icon-url="fanclub.iconUrl"
        :name="fanclub.name"
        :description="fanclub.description"
        :is-smaller-title="isSmallerTitle"
      />
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import FanclubCardDetail from './default-detail.vue';
import { Fanclub } from '@/types/api/fanclub';

const HAS_BORDER_CLASS = 'fanclub__inner';
const NONE_BORDER_CLASS = 'fanclub__inner--no-border';

export default defineComponent({
  components: {
    FanclubCardDetail,
  },
  props: {
    fanclub: {
      type: Object as PropType<Fanclub>,
      required: true,
    },
    linkTo: {
      type: String,
      default: '',
    },
    hasBorder: {
      type: Boolean,
      default: true,
    },
    isSmallerTitle: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const innerClassName = computed<string>(() => (props.hasBorder ? HAS_BORDER_CLASS : NONE_BORDER_CLASS));
    return {
      innerClassName,
    };
  },
});
</script>
<style lang="scss" scoped>
@import './mixins.scss';

.fanclub {
  max-width: calc(var(--size-sp-safe-space) + var(--size-pc-content-width));
  --size-fanclub-space: 2.4rem;
  height: 100%;
  @include md {
    --size-fanclub-space: 1.6rem;
  }
  &__inner {
    height: 100%;
    border: 0.3rem solid var(--color-white-darkest);
    @include apply-radius;
    @include inject-bottom-space;
    &--no-border {
      @include apply-radius;
      @include inject-bottom-space;
      box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2);
    }
  }
}
</style>

<template>
  <div class="fanclub">
    <div class="fanclub__inner">
      <CoverAndIcon :alt="name" :cover-image-url="fanclub.coverImageUrl" :icon-url="fanclub.iconUrl" />
      <TextsComponent :title="name" :description="description" />
      <slot />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import CoverAndIcon from '../image/icon-and-cover.vue';
import TextsComponent from '../title-and-description/limited-height.vue';
import { Fanclub } from '@/types/api/fanclub';

export default defineComponent({
  components: {
    CoverAndIcon,
    TextsComponent,
  },
  props: {
    fanclub: {
      type: Object as PropType<Fanclub>,
      required: true,
    },
    overwriteName: {
      type: String,
      default: null,
    },
    overwriteDescription: {
      type: String,
      default: null,
    },
  },
  setup(props) {
    const name = computed<string>(() => props.overwriteName ?? props.fanclub.name);
    const description = computed<string>(() => props.overwriteDescription ?? props.fanclub.description);
    return {
      name,
      description,
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
  }
}
</style>

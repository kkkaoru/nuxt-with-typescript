<template>
  <div class="banner">
    <a :href="banner.linkUrl" target="_blank" rel="noopener">
      <img class="banner__image" :src="banner.imageUrl" :alt="banner.name" />
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { Banner } from '@/types/banner';

export default defineComponent({
  props: {
    banner: {
      type: Object as PropType<Banner>,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.banner {
  padding-left: var(--size-sp-safe-space);
  &__image {
    width: 32rem;
    max-width: 100vw;
    border-radius: 1.2rem;
    @include md {
      width: 57.6rem;
    }
  }
}
</style>

<template>
  <div class="fanclub-image">
    <div class="fanclub-image__top">
      <picture>
        <img :src="coverImageUrl" :alt="alt" class="fanclub-image__cover" />
      </picture>
    </div>
    <div class="fanclub-image__bottom">
      <picture>
        <img :src="iconUrl" :alt="alt" class="fanclub-image__icon" />
      </picture>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    alt: {
      type: String,
      required: true,
    },
    coverImageUrl: {
      type: String,
      required: true,
    },
    iconUrl: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      default: 'var(--color-white)',
    },
  },
});
</script>
<style lang="scss" scoped>
@import './mixins.scss';

.fanclub-image {
  &__bottom {
    @include base-bottom-style;
  }
  &__cover {
    display: block;
    width: 100%;
    height: 10rem;
    object-fit: cover;
    background-color: var(--color-white);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    user-select: none;
  }
  &__icon {
    @include icon-style(var(--size-fanclub-space));
  }
}
</style>

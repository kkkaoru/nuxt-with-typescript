<template>
  <ul class="announcement-images">
    <li v-for="(imageUrl, index) in images" :key="index" class="announcement-images__container">
      <div class="announcement-images__inner">
        <client-only>
          <lazy-component>
            <img class="announcement-images__image" :src="imageUrl" :alt="`${name}_${index}`" />
          </lazy-component>
        </client-only>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
.announcement-images {
  display: flex;
  flex-direction: column;
  max-width: calc(var(--size-sp-safe-space) + var(--size-pc-content-width));
  padding: calc(2 * var(--size-sp-safe-space)) 0 0;
  @include md {
    padding: calc(2 * var(--size-sp-safe-space)) var(--size-sp-safe-space) 0;
  }
  &__container {
    & + & {
      padding-top: var(--size-sp-safe-space);
    }
  }
  &__inner {
    width: 100%;
    height: 54rem;
  }
  &__image {
    width: 100%;
    height: 54rem;
    object-fit: cover;
  }
}
</style>

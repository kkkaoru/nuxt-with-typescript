<template>
  <div class="fanclub-image--with-bg">
    <div class="fanclub-image--with-bg__top">
      <CoverImage :image-url="coverImageUrl" :name="alt" />
    </div>
    <div class="fanclub-image--with-bg__bottom">
      <picture class="fanclub-image--with-bg__icon-wrap">
        <img :src="iconUrl" :alt="alt" class="fanclub-image--with-bg__icon" />
      </picture>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CoverImage from '@/components/atoms/cover-image/index.vue';

export default defineComponent({
  components: {
    CoverImage,
  },
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
  },
});
</script>
<style lang="scss" scoped>
@import './mixins.scss';

.fanclub-image--with-bg {
  &__top {
    background-color: var(--color-white);
    @include md {
      height: 10rem;
      overflow-y: hidden;
    }
  }
  &__bottom {
    @include base-bottom-style;
    display: flex;
    justify-content: center;
  }
  &__icon-wrap {
    width: 100%;
    max-width: 64rem;
    padding-left: 2rem;
  }
  &__icon {
    @include icon-style(auto);
  }
}
</style>

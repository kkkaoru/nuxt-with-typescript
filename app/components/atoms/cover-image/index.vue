<template>
  <div class="cover-image">
    <div class="cover-image__background" :style="imageBackgroundStyle"></div>
    <picture>
      <img class="cover-image__image" :src="imageUrl" :alt="name" />
    </picture>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  components: {},
  props: {
    imageUrl: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  setup(props) {
    const imageBackgroundStyle = {
      backgroundImage: `url("${props.imageUrl}")`,
    };
    return {
      imageBackgroundStyle,
    };
  },
});
</script>
<style lang="scss" scoped>
.cover-image {
  position: relative;
  display: flex;
  justify-content: center;
  @include md {
    height: 36rem;
    transform: translate3d(0, 0, 0.1rem);
  }
  overflow-y: hidden;
  &__background {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: 100%;
    filter: blur(1rem) brightness(60%);
  }
  &__image {
    width: 100%;
    max-width: none;
    @include md {
      max-width: 64rem;
    }
  }
}
</style>

<template>
  <!-- FIXME: Organize component of image with background image -->
  <div class="content-visual">
    <div class="content-visual__background" :style="imageBackgroundStyle"></div>
    <picture>
      <img class="content-visual__image" :src="imageUrl" />
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
.content-visual {
  position: relative;
  display: flex;
  justify-content: center;
  @include md {
    height: 36rem;
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

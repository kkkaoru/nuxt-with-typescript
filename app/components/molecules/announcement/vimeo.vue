<template>
  <div v-if="videoUrl" class="vimeo">
    <client-only>
      <lazy-component>
        <iframe class="vimeo__iframe" :src="vimeoUrl" allow="autoplay; fullscreen" allowfullscreen></iframe>
      </lazy-component>
    </client-only>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api';

export default defineComponent({
  props: {
    videoUrl: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    // vimeo デザイン調整用にURLを修正する
    const vimeoUrl = computed(() => `${props.videoUrl}?title=0&byline=0&portrait=0`);
    return { vimeoUrl };
  },
});
</script>
<style lang="scss" scoped>
.vimeo {
  $sp-height: 21rem;
  $pc-height: 34.2rem;
  $sp-blank-space: 2.1rem;
  $pc-blank-space: 3.15rem;
  height: $sp-height + $sp-blank-space;
  padding-top: $sp-blank-space;
  @include md {
    height: $pc-height + $pc-blank-space;
    padding-top: $pc-blank-space;
  }
  &__iframe {
    width: 100vw;
    height: $sp-height;
    border: none;
    @include md {
      height: $pc-height;
    }
  }
}
</style>

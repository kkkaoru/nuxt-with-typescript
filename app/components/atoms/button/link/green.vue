<template>
  <nuxt-link :to="to" class="link-green">{{ text }}</nuxt-link>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  props: {
    text: {
      type: String,
    },
    to: {
      type: String,
    },
  },
});
</script>
<style lang="scss" scoped>
@import '../button.scss';
.link-green {
  @include button-style(var(--color-green), var(--color-on-green), var(--color-size-default));
}
</style>

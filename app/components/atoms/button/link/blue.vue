<template>
  <nuxt-link :to="to" class="link-blue">{{ text }}</nuxt-link>
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
.link-blue {
  @include button-style(var(--color-blue), var(--color-on-blue), var(--color-size-default));
}
</style>

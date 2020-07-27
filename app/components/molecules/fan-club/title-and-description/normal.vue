<template>
  <div class="fanclub-text">
    <h2 class="fanclub-text__title">{{ title }}</h2>
    <pre class="fanclub-text__description">{{ description }}</pre>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
});
</script>
<style lang="scss" scoped>
@import './mixins.scss';

.fanclub-text {
  @include common-texts-parent;
  &__title {
    @include common-title(var(--color-green), 2.3rem);
  }
  &__description {
    @include common-description(var(--size-sp-safe-space));
  }
}
</style>

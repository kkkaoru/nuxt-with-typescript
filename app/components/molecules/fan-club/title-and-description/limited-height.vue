<template>
  <div class="fanclub-text--limited-height">
    <h2 class="fanclub-text--limited-height__title">{{ title }}</h2>
    <pre class="fanclub-text--limited-height__description">{{ description }}</pre>
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

.fanclub-text--limited-height {
  @include common-texts-parent;
  &__title {
    @include common-title(var(--color-green), 2.3rem);
  }
  &__description {
    @include common-description(var(--size-sp-safe-space));
    display: -webkit-box;
    // This min-height is when 3 lines
    min-height: 7.3rem;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
}
</style>

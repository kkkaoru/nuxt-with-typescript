<template>
  <div class="fanclub-text--smaller">
    <h2 class="fanclub-text--smaller__title">{{ title }}</h2>
    <pre class="fanclub-text--smaller__description">{{ description }}</pre>
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

.fanclub-text--smaller {
  @include common-texts-parent;
  &__title {
    @include common-title(var(--color-green), 1.9rem);
  }
  &__description {
    @include common-description(0.8rem);
  }
}
</style>

<template>
  <p v-if="message" class="waiting-payment">
    <MdiIcon :mdi="mdiInformation" class="waiting-payment__icon" />
    <span class="waiting-payment__text">{{ message }}</span>
  </p>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mdiInformation } from '@mdi/js';
import MdiIcon from '@/components/atoms/mdi-icon/index.vue';

export default defineComponent({
  components: {
    MdiIcon,
  },
  props: {
    message: {
      type: String,
      default: null,
    },
  },
  setup() {
    return {
      MdiIcon,
      mdiInformation,
    };
  },
});
</script>
<style lang="scss" scoped>
@import './mixins.scss';

.waiting-payment {
  @include message-parent-style(var(--color-waiting-payment), var(--color-on-blue));
  &__icon {
    @include message-icon-style(var(--color-icon-annotation));
  }
  &__text {
    @include message-text-style;
  }
}
</style>

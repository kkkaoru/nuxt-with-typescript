<template>
  <p v-if="message" class="payment-error">
    <MdiIcon :mdi="mdiInformation" class="payment-error__icon" />
    <span class="payment-error__text">{{ message }}</span>
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

.payment-error {
  @include message-parent-style(var(--color-payment-error), var(--color-on-red));
  &__icon {
    @include message-icon-style(var(--color-icon-error));
  }
  &__text {
    @include message-text-style;
  }
}
</style>

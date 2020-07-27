<template>
  <div class="payment-help-wrap">
    <img class="payment-help-wrap__icon" :src="require('@/assets/no-index/icons/help.svg')" alt="help" />
    <div class="payment-help-wrap__text-inner">
      <PaymentHelpJa :links="links" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { PaymentHelpLinks } from './types';
import PaymentHelpJa from './ja.vue';

// FIXME: Apply multi language
export default defineComponent({
  components: {
    PaymentHelpJa,
  },
  setup() {
    const links: PaymentHelpLinks = {
      creditCard: '#',
      convenienceStore: '#',
    };
    return {
      links,
    };
  },
});
</script>
<style lang="scss" scoped>
.payment-help-wrap {
  display: flex;
  padding: var(--size-sp-safe-space) 2.4rem 0;
  &__icon {
    width: 2.4rem;
    height: 2.4rem;
    user-select: none;
  }
  &__text-inner {
    padding-left: 0.8rem;
  }
}
</style>

<template>
  <div class="payment-help">
    <p class="payment-help__text">
      詳しいお支払い方法は
      <nuxt-link class="payment-help__link" :to="links.creditCard">クレジットカード払い</nuxt-link>
      、または
      <nuxt-link class="payment-help__link" :to="links.convenienceStore">コンビニ払い</nuxt-link>
      のヘルプをご覧ください。
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { PaymentHelpLinks } from './types';

export default defineComponent({
  props: {
    links: {
      type: Object as PropType<PaymentHelpLinks>,
      default: {
        creditCard: '#',
        convenienceStore: '#',
      } as PaymentHelpLinks,
    },
  },
});
</script>
<style lang="scss" scoped>
@import './mixins.scss';
@include payment-help;
</style>

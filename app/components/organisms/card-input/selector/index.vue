<template>
  <ul class="show-card">
    <li v-for="(paymentMethod, index) in filteredPaymentMethods" :key="index" class="show-card__container">
      <CardItem
        :selected-payment-method="selectedPaymentMethod"
        :payment-method="paymentMethod"
        @change-payment-method="changePaymentMethod"
      />
    </li>
    <li v-if="!locked" class="show-card__container">
      <CardItem
        key="other-card"
        :selected-payment-method="selectedPaymentMethod"
        :payment-method="null"
        @change-payment-method="changePaymentMethod"
      />
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import CardItem from './item.vue';
import { StripePaymentMethod } from '~/types/api/stripe/payment-method';

export default defineComponent({
  components: {
    CardItem,
  },
  props: {
    paymentMethods: {
      type: Array as PropType<StripePaymentMethod[]>,
      required: true,
    },
    selectedPaymentMethod: {
      type: Object as PropType<StripePaymentMethod | null>,
      default: null,
    },
    name: {
      type: String,
      default: 'show-card',
    },
    locked: {
      // 支払い方法の変更を不可とする場合 true
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const changePaymentMethod = (paymentMethod: StripePaymentMethod | null) => {
      if (props.locked) {
        return;
      }
      ctx.emit('change-payment-method', paymentMethod);
    };

    const filteredPaymentMethods = computed(() =>
      props.locked ? [props.selectedPaymentMethod] : props.paymentMethods,
    );

    return {
      changePaymentMethod,
      filteredPaymentMethods,
    };
  },
});
</script>
<style lang="scss" scoped>
.show-card {
  padding-top: var(--size-sp-safe-space);
  &__radio {
    display: none;
  }
  &__container {
    padding: 0 2.4rem;
    & + & {
      padding-top: 0.8rem;
    }
  }
  @mixin common-label {
    display: flex;
    align-items: center;
    height: 9rem;
    padding: 0 2.4rem;
    color: rgba(11, 13, 45, 0.9);
    font-size: 1.9rem;
    background-color: var(--color-white-darker);
    border: 0.2rem solid transparent;
    border-radius: 1.2rem;
    input[type='radio']:checked + & {
      border: 0.2rem solid var(--color-green);
    }
  }
  &__label {
    @include common-label;
    transition: all var(--time-checked) var(--type-checked);
  }
  &__label-text {
    font-size: 1.6rem;
  }
  &__number-wrap {
    margin-top: -0.4rem;
    padding-left: 0.8rem;
  }
  &__number-prefix {
    font-size: 1.9rem;
  }
  &__number {
    font-size: 1.9rem;
  }
  &__card-wrap {
    display: flex;
    align-items: center;
    padding-top: 0.8rem;
  }
}
</style>

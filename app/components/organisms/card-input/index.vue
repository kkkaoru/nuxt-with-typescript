<template>
  <ul class="card-input">
    <li v-if="paymentMethods.length > 0" class="card-input__container">
      <h3 class="card-input__title--sub">{{ title }}</h3>
      <CardSelector
        :payment-methods="paymentMethods"
        :selected-payment-method="selectedPaymentMethod"
        :locked="locked"
        @change-payment-method="onChangePaymentMethod"
      />
    </li>
    <li v-if="showCardInput" class="card-input__container">
      <h3 class="card-input__title--sub">カード情報を入力してください</h3>
      <CreditCardInputsComponent @complete="onStripeInputComplete" />
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType, computed, ref } from '@vue/composition-api';
import CardSelector from './selector/index.vue';
import { StripePaymentMethod } from '@/types/api/stripe/payment-method';
import CreditCardInputsComponent from '@/components/molecules/payment/input-credit-card.vue';

export default defineComponent({
  components: {
    CreditCardInputsComponent,
    CardSelector,
  },
  props: {
    selectedPaymentMethod: {
      type: Object as PropType<StripePaymentMethod>,
      default: null,
    },
    paymentMethods: {
      type: Array as PropType<StripePaymentMethod[]>,
      required: true,
    },
    title: {
      type: String,
      default: 'お支払いに使用するカードを選択してください',
    },
    locked: {
      // 支払い方法の変更を不可とする場合 true
      type: Boolean,
      default: false,
    },
  },
  setup(props, ctx) {
    const onChangePaymentMethod = (paymentMethod: StripePaymentMethod | null) => {
      if (props.locked) {
        return;
      }
      ctx.emit('change-payment-method', paymentMethod);
    };

    // 利用可能な支払い方法が存在しない場合、または有効なカードを選択していない場合、
    const showCardInput = computed(() => !props.locked && props.selectedPaymentMethod === null);

    // カード入力の完了を通知する
    const isStripeInputComplete = ref<boolean>(false);
    const onStripeInputComplete = (complete: boolean) => {
      isStripeInputComplete.value = complete;
      ctx.emit('card-input-complete', isStripeInputComplete.value);
    };

    return {
      showCardInput,
      onStripeInputComplete,
      onChangePaymentMethod,
    };
  },
});
</script>
<style lang="scss" scoped>
.card-input {
  &__container {
    margin-bottom: 2.7rem;
    box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2);
  }
}
</style>

<template>
  <ul class="payment-detail">
    <li class="payment-detail__container">
      <h3 class="payment-detail__title--sub">{{ label }}</h3>
      <PeriodSelector
        :amount="amount"
        :payment-setting="paymentSetting"
        :selected-payment-setting="paymentSetting"
        :payment-settings="paymentSettings"
      />
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import PeriodSelector from '@/components/organisms/payment-setting/selectors/period/index.vue';
import { PaymentSetting } from '~/types/api/payment-setting';

export default defineComponent({
  components: {
    PeriodSelector,
  },
  props: {
    amount: {
      type: Number,
      required: true,
    },
    paymentSetting: {
      type: Object as PropType<PaymentSetting>,
      required: true,
    },
  },
  setup(props) {
    const paymentSettings = computed(() => [props.paymentSetting]);
    const isSubscription = computed(() => props.paymentSetting.isSubscription);

    const label = isSubscription.value ? 'お支払いサイクル' : '金額と期間';

    return {
      label,
      isSubscription,
      paymentSettings,
    };
  },
});
</script>
<style lang="scss" scoped>
.payment-detail {
  &__container {
    margin-bottom: 2.7rem;
    box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2);
  }
}
</style>

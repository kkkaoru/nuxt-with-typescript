<template>
  <div class="period">
    <ul class="period__list">
      <li v-for="paymentSetting in paymentSettings" :key="paymentSetting.id" class="period__container">
        <PeriodItem
          :amount="amount"
          :payment-setting="paymentSetting"
          :selected-payment-setting="selectedPaymentSetting"
          @change-payment-setting="changePaymentSetting"
        />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, SetupContext, computed } from '@vue/composition-api';
import PeriodItem from './item.vue';
import { PaymentSetting } from '@/types/api/payment-setting';

export default defineComponent({
  components: {
    PeriodItem,
  },
  props: {
    amount: {
      type: Number,
      required: true,
    },
    paymentSettings: {
      type: Array as PropType<PaymentSetting[]>,
    },
    selectedPaymentSetting: {
      type: Object as PropType<PaymentSetting>,
    },
    name: {
      type: String,
      default: 'payment_period',
    },
  },
  setup(props, ctx: SetupContext) {
    // 選択中のサービスタイプ
    const activePeriod = computed(() => props.selectedPaymentSetting.period);

    const changePaymentSetting = (paymentSetting: PaymentSetting) => {
      ctx.emit('change-payment-setting', paymentSetting);
    };

    return {
      activePeriod,
      changePaymentSetting,
    };
  },
});
</script>
<style lang="scss" scoped>
.period {
  padding-top: var(--size-sp-safe-space);
  &__container {
    padding: 0 2.4rem;
    & + & {
      padding-top: 0.8rem;
    }
  }
}
</style>

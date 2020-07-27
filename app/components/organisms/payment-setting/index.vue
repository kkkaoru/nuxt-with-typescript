<template>
  <ul class="payment-setting">
    <li class="payment-setting__container">
      <h3 class="payment-setting__title--sub">お支払い方法を選んでください</h3>
      <ServiceTypeSelector
        :amount="amount"
        :service-types="serviceTypes"
        :selected-payment-setting="selectedPaymentSetting"
        @change-type="onChangeServiceType"
      />
      <PaymentHelp />
    </li>
    <li class="payment-setting__container">
      <h3 class="payment-setting__title--sub">{{ paymentSettingTitleLabel }}</h3>
      <PeriodSelector
        :amount="amount"
        :payment-settings="sameTypePaymentSettings"
        :selected-payment-setting="selectedPaymentSetting"
        @change-payment-setting="onChangePaymentSetting"
      />
      <SubscriptionHelp v-if="isSubscription" />
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import ServiceTypeSelector from './selectors/service-type/index.vue';
import PeriodSelector from './selectors/period/index.vue';
import PaymentPeriodsComponent from '@/components/molecules/payment/payment-periods.vue';
import PaymentHelp from '@/components/molecules/payment/payment-help/index.vue';
import SubscriptionHelp from '@/components/molecules/payment/subscription-help/index.vue';
import ButtonGreen from '@/components/atoms/button/buttonTag/green.vue';
import { PaymentSetting, PaymentType } from '~/types/api/payment-setting';

export default defineComponent({
  components: {
    ServiceTypeSelector,
    PeriodSelector,
    PaymentHelp,
    SubscriptionHelp,
    PaymentPeriodsComponent,
    ButtonGreen,
  },
  props: {
    amount: {
      type: Number,
      required: true,
    },
    selectedPaymentSetting: {
      type: Object as PropType<PaymentSetting>,
    },
    paymentSettings: {
      type: Array as PropType<PaymentSetting[]>,
      default: [] as PaymentSetting[],
    },
  },
  setup(props, ctx) {
    // 選択可能な支払い方法
    const serviceTypes = computed(() => {
      return Array.from(new Set(props.paymentSettings.map((p) => p.serviceType)));
    });

    // 選択中の支払い設定と同じサービスの支払い設定
    const sameTypePaymentSettings = computed(() => {
      const serviceType = props.selectedPaymentSetting.serviceType;
      return props.paymentSettings.filter((p) => p.serviceType === serviceType);
    });

    // 支払いに使用するサービスが変更された場合
    const onChangeServiceType = (serviceType: PaymentType) => {
      if (serviceType === props.selectedPaymentSetting.serviceType) {
        // 変わらない場合何もしない
        return;
      }

      // 選択中の月数と同じ月数の支払い設定がある場合、優先して使用する
      const selectablePaymentSettings = props.paymentSettings.filter((p) => p.serviceType === serviceType);
      const newPaymentSetting =
        selectablePaymentSettings.find((p) => p.period === props.selectedPaymentSetting.period) ||
        selectablePaymentSettings[0];
      ctx.emit('change-payment-setting', newPaymentSetting);
    };

    // 支払いに使用するサービスが変更された場合
    const onChangePaymentSetting = (paymentSetting: PaymentSetting) => {
      ctx.emit('change-payment-setting', paymentSetting);
    };

    const isSubscription = computed(() => props.selectedPaymentSetting.isSubscription);

    const paymentSettingTitleLabel = computed(() =>
      isSubscription.value ? 'お支払いサイクルを選んでください' : '金額と加入期間',
    );

    return {
      serviceTypes,
      sameTypePaymentSettings,
      onChangeServiceType,
      onChangePaymentSetting,
      isSubscription,
      paymentSettingTitleLabel,
    };
  },
});
</script>
<style lang="scss" scoped>
.payment-setting {
  &__container {
    margin-bottom: 2.7rem;
    box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2);
  }
}
</style>

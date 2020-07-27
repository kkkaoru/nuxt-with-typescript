<template>
  <span class="price-with-period" :style="`color:${fontColor}`"
    >{{ priceText }}{{ separatorText }}{{ periodText }}</span
  >
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { PaymentSetting } from '@/types/api/payment-setting';
import { calcAmount, convertPriceNumberToString, calcDaysByPeriod, generateDaysText } from '@/utils/payment';
import { buildRgbaFormat } from '@/utils/color';

export default defineComponent({
  props: {
    amount: {
      type: Number,
      required: true,
    },
    paymentSetting: {
      type: Object as PropType<PaymentSetting>,
      required: true,
    },
    currency: {
      type: String,
      default: 'JPY',
    },
    priceLocales: {
      type: String,
      default: 'ja-JP',
    },
    periodLocale: {
      type: String,
      default: 'ja',
    },
    separatorText: {
      type: String,
      default: '/',
    },
    fontRgb: {
      type: String,
      default: 'var(--color-black-rgb)',
    },
    fontAlpha: {
      type: Number,
      default: 0.9,
    },
  },
  setup(props) {
    const fontColor = computed<string>(() => buildRgbaFormat(props.fontRgb, props.fontAlpha));
    const paymentAmount = computed<number>(() => calcAmount(props.amount, props.paymentSetting));
    const priceText = computed<string>(() =>
      convertPriceNumberToString(paymentAmount.value, props.currency, props.priceLocales),
    );
    const periodDays = computed<number>(() => calcDaysByPeriod(props.paymentSetting.period));
    const periodText = computed<string>(() => generateDaysText(periodDays.value, props.periodLocale));
    return {
      priceText,
      periodText,
      fontColor,
    };
  },
});
</script>

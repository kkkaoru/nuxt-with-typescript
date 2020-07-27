<template>
  <div class="period">
    <input
      :id="inputId"
      type="radio"
      :value="paymentSetting"
      :name="name"
      class="period__radio"
      :checked="checked"
      @change="changePaymentSetting"
    />
    <label class="period__label" :for="inputId">
      <div v-if="isSubscription" class="period__label-inner">
        <p class="period__price">
          <span class="period__price-text" v-text="priceText" />
          <span class="period__price-text" v-text="monthlyText" />
        </p>
        <p class="period__text-wrap">
          <span class="period__text--strong" v-text="label" />
          <span class="period__text" v-text="suffix" />
        </p>
      </div>
      <div v-else class="period__label-inner">
        <p class="period__text-wrap">
          <span class="period__text--strong" v-text="priceText" />
          <span class="period__text--strong" v-text="daysText" />
        </p>
      </div>
      <CheckIcon />
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { PaymentSetting } from '@/types/api/payment-setting';
import {
  generateMonthlyText,
  equalPeriods,
  convertPriceNumberToString,
  calcAmount,
  generateDaysText,
} from '@/utils/payment';
import CheckIcon from '@/components/atoms/check-icon/green.vue';

const MONTHS_OF_ONE_YEAR = 12;
const DAYS_OF_ONE_YEAR = 365;
const DAYS_OF_ONE_MONTH = 30;

export default defineComponent({
  components: {
    CheckIcon,
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
    selectedPaymentSetting: {
      type: Object as PropType<PaymentSetting>,
      required: true,
    },
    name: {
      type: String,
      default: 'payment_period',
    },
  },
  setup(props, ctx) {
    // input要素のID
    const inputId = computed(() => `${props.name}_${props.paymentSetting.id}`);

    // 選択中の支払い設定
    const checked = computed(() => props.selectedPaymentSetting === props.paymentSetting);
    const changePaymentSetting = () => {
      ctx.emit('change-payment-setting', props.paymentSetting);
    };

    const isSubscription = computed(() => props.paymentSetting.isSubscription);

    const price = computed(() => calcAmount(props.amount, props.paymentSetting));
    const priceText = computed(() => convertPriceNumberToString(price.value, 'JPY'));
    const monthlyText = computed(() => `/${generateMonthlyText(props.paymentSetting.period)}`);
    // FIXME: Use calcDaysByPeriod from util
    const daysText = computed(() => {
      const days =
        props.paymentSetting.period === MONTHS_OF_ONE_YEAR
          ? DAYS_OF_ONE_YEAR
          : props.paymentSetting.period * DAYS_OF_ONE_MONTH;
      return `/${generateDaysText(days)}`;
    });
    const label = computed(() => (props.paymentSetting.period >= MONTHS_OF_ONE_YEAR ? '年間' : '月間'));
    const suffix = computed(() => '払い');
    return {
      inputId,
      checked,
      isSubscription,
      generateMonthlyText,
      equalPeriods,
      priceText,
      label,
      suffix,
      monthlyText,
      daysText,
      changePaymentSetting,
      convertPriceNumberToString,
    };
  },
});
</script>
<style lang="scss" scoped>
.period {
  &__radio {
    display: none;
  }
  &__label {
    display: flex;
    align-items: center;
    height: 9rem;
    padding: 0 2.4rem;
    background-color: var(--color-white-darker);
    border: 0.2rem solid transparent;
    border-radius: 1.2rem;
    transition: all var(--time-checked) var(--type-checked);
    input[type='radio']:checked + & {
      border: 0.2rem solid var(--color-green);
    }
  }
  &__price {
    font-size: 0;
  }
  &__price-text {
    color: rgba(11, 13, 45, 0.9);
    font-size: 1.3rem;
  }
  &__text-wrap {
    font-size: 0;
  }
  &__text {
    padding-left: 0.6rem;
    color: rgba(11, 13, 45, 0.7);
    font-size: 1.6rem;
    &--strong {
      color: rgba(11, 13, 45, 0.9);
      font-size: 2.3rem;
    }
  }
}
</style>

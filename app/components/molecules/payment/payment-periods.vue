<template>
  <div class="period">
    <ul class="period__list">
      <li v-for="(period, index) in periods" :key="index" class="period__container">
        <input
          :id="`period_${index}`"
          type="radio"
          :value="index"
          :name="name"
          class="period__radio"
          :checked="equalPeriods(period, active)"
          @change="changePeriod(index)"
        />
        <label class="period__label" :for="`period_${index}`">
          <div class="period__label-inner">
            <p class="period__price">
              <span class="period__price-text">{{
                convertPriceNumberToString(period.paymentAmount, period.currencyType)
              }}</span>
              <span class="period__price-text">/{{ generateMonthlyText(period.monthlyNumber) }}</span>
            </p>
            <p class="period__text-wrap">
              <span class="period__text--strong">{{ period.displayLabel }}</span>
              <span class="period__text">{{ period.displaySuffix }}</span>
            </p>
          </div>
          <CheckIcon />
        </label>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, SetupContext } from '@vue/composition-api';
import { PaymentPeriod } from '@/types/payment';
import { generateMonthlyText, equalPeriods, convertPriceNumberToString } from '@/utils/payment';
import CheckIcon from '@/components/atoms/check-icon/green.vue';

export default defineComponent({
  components: {
    CheckIcon,
  },
  props: {
    periods: {
      type: Array as PropType<PaymentPeriod[]>,
    },
    active: {
      type: Object as PropType<PaymentPeriod>,
    },
    name: {
      type: String,
      default: 'payment_period',
    },
  },
  setup(props, ctx: SetupContext) {
    const changePeriod = (index: number) => {
      ctx.emit('change-period', props.periods[index]);
    };
    return {
      generateMonthlyText,
      equalPeriods,
      changePeriod,
      convertPriceNumberToString,
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

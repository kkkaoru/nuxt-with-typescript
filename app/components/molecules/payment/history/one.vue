<template>
  <div class="payment-history">
    <div class="payment-history__container--left">
      <p class="payment-history__name">{{ nameLabel }}</p>
    </div>
    <div class="payment-history__container--right">
      <p class="payment-history__price">{{ paidPrice }}</p>
      <time :datetime="dateTime" class="payment-history__datetime">{{ displayDateText }}</time>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { PaymentHistory } from '@/types/api/payment-history';
import { convertPriceNumberToString } from '@/utils/payment';
import { generateDateTimeInMinutesText, generateDateTime } from '@/utils/date-time';

export default defineComponent({
  props: {
    history: {
      type: Object as PropType<PaymentHistory>,
    },
  },
  setup(props) {
    const paidPrice = convertPriceNumberToString(props.history.captured, 'JPY');
    const paidDate = new Date(props.history.capturedAt);
    const displayDateText = generateDateTimeInMinutesText(paidDate);
    const dateTime = generateDateTime(paidDate);
    const nameLabel = computed(() => {
      const licenseName = props.history.product.name;
      const fanclubName = props.history.product.fanclub.name;
      return `${fanclubName}${licenseName}`;
    });
    return {
      paidPrice,
      displayDateText,
      dateTime,
      nameLabel,
    };
  },
});
</script>
<style lang="scss" scoped>
.payment-history {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2.4rem var(--size-sp-safe-space) 2.6rem;
  border-bottom: 0.2rem solid #ececec;
  &__container {
    &--left {
      width: 70%;
    }
    &--right {
      font-size: 0;
      text-align: right;
    }
  }
  &__name {
    color: rgba(11, 13, 45, 0.7);
    font-size: var(--size-font-default);
  }
  &__price {
    color: rgba(11, 13, 45, 0.9);
    font-weight: bold;
    font-size: 1.9rem;
  }
  &__datetime {
    padding-top: 0.5rem;
    color: rgba(11, 13, 45, 0.48);
    font-size: 1.1rem;
  }
}
</style>

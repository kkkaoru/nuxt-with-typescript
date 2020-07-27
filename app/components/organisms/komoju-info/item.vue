<template>
  <ul class="store-registration">
    <li class="store-registration__container">
      <div class="store-registration__inner">
        <p class="store-registration__name">{{ receiptLabel }}</p>
        <p class="store-registration__value">{{ komojuOrder.receipt }}</p>
      </div>
    </li>
    <li v-if="komojuOrder.confirmationCode" class="store-registration__container">
      <div class="store-registration__inner">
        <p class="store-registration__name">確認番号</p>
        <p class="store-registration__value">{{ komojuOrder.confirmationCode }}</p>
      </div>
    </li>
    <li class="store-registration__container">
      <div class="store-registration__inner--half">
        <p class="store-registration__name--small">お支払い期限</p>
        <p class="store-registration__value--small">{{ expireDate }}</p>
      </div>
      <div class="store-registration__inner--half">
        <p class="store-registration__name--small">コンビニエンスストア</p>
        <p class="store-registration__value--small">{{ storeName }}</p>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { generateDisplayStoreName, generateReceiptLabel } from '@/utils/payment';
import { generateStoreExpireDateTimeText } from '@/utils/date-time';
import { KomojuOrder } from '~/types/api/order';

export default defineComponent({
  props: {
    komojuOrder: {
      type: Object as PropType<KomojuOrder>,
      required: true,
    },
  },
  setup(props) {
    const storeName = computed(() => generateDisplayStoreName(props.komojuOrder.store));
    const expireDate = generateStoreExpireDateTimeText(new Date(props.komojuOrder.expireAt));
    const receiptLabel = computed(() => generateReceiptLabel(props.komojuOrder.store));

    return {
      storeName,
      expireDate,
      receiptLabel,
    };
  },
});
</script>
<style lang="scss" scoped>
.store-registration {
  padding: 0 var(--size-sp-safe-space);
  &__container {
    display: flex;
    justify-content: space-between;
    & + & {
      padding-top: 0.8rem;
    }
  }
  &__inner {
    @mixin inner-style($width) {
      display: flex;
      flex-direction: column;
      width: $width;
      padding: 0.8rem var(--size-sp-safe-space);
      background-color: var(--color-white-darker);
    }
    @include inner-style(100%);
    &--half {
      @include inner-style(48.5%);
    }
  }
  &__name {
    @mixin name-style($font-size) {
      color: rgba(11, 13, 45, 0.48);
      font-size: $font-size;
    }
    @include name-style(1.3rem);
    &--small {
      @include name-style(1rem);
      margin-left: -0.7rem;
      transform: scale(0.9);
    }
  }
  &__value {
    @mixin value-style($font-size) {
      color: rgba(11, 13, 45, 0.9);
      font-weight: bold;
      font-size: $font-size;
    }
    @include value-style(2.8rem);
    &--small {
      @include value-style(1.6rem);
    }
  }
}
</style>

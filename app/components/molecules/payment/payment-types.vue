<template>
  <div class="payment-type">
    <ul class="payment-type__list">
      <li v-for="(type, index) in paymentTypes" :key="index" class="payment-type__container">
        <input
          :id="type"
          type="radio"
          :value="type"
          :checked="type === active"
          :name="name"
          class="payment-type__radio"
          @change="updateTypes($event)"
        />
        <label :for="type" :class="decideLabelClassName(type)">
          <span class="payment-type__label-text">{{ decidePaymentTypeLabel(type) }}</span>
          <CheckIcon />
        </label>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, SetupContext, PropType } from '@vue/composition-api';
import { PaymentType } from '@/types/api/payment-setting';
import { decidePaymentTypeLabel } from '@/utils/payment';
import CheckIcon from '@/components/atoms/check-icon/green.vue';

export default defineComponent({
  components: {
    CheckIcon,
  },
  props: {
    paymentTypes: {
      type: Array as PropType<PaymentType[]>,
    },
    active: {
      type: String as PropType<PaymentType>,
      default: 'stripe',
    },
    name: {
      type: String,
      default: 'payment-type',
    },
  },
  setup(_, ctx: SetupContext) {
    const updateTypes = (event: InputEvent) => {
      ctx.emit('change-type', (event.target as HTMLInputElement).value);
    };
    const decideLabelClassName = (type: PaymentType): string => {
      const defaultClassName = 'payment-type__label';
      switch (type) {
        case 'komoju':
          return `${defaultClassName}--convenience-store`;
        case 'stripe':
          return `${defaultClassName}--credit-card`;
        default:
          return defaultClassName;
      }
    };
    return {
      decidePaymentTypeLabel,
      updateTypes,
      decideLabelClassName,
    };
  },
});
</script>
<style lang="scss" scoped>
.payment-type {
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
    transition: all var(--time-checked) var(--type-checked);
    input[type='radio']:checked + & {
      border: 0.2rem solid var(--color-green);
    }
  }
  &__label {
    @mixin payment-icon($icon-url) {
      display: inline-block;
      width: 3.2rem;
      height: 3.2rem;
      background-image: url($icon-url);
      content: '';
    }
    @include common-label;
    &--credit-card {
      @include common-label;
      &::before {
        @include payment-icon('~assets/no-index/icons/credit-card.svg');
      }
    }
    &--convenience-store {
      @include common-label;
      &::before {
        @include payment-icon('~assets/no-index/icons/convenience-store.svg');
      }
    }
  }
  &__label-text {
    padding-left: 0.8rem;
  }
}
</style>

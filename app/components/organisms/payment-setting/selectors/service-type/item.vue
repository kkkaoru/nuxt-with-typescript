<template>
  <div>
    <input
      :id="inputId"
      type="radio"
      :value="serviceType"
      :checked="checked"
      :name="name"
      class="payment-type__radio"
      @change="onChageServiceType"
    />
    <label :for="inputId" :class="decideLabelClassName">
      <span class="payment-type__label-text" v-text="label" />
      <CheckIcon />
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { PaymentType, PaymentSetting } from '@/types/api/payment-setting';
import { decidePaymentTypeLabel } from '@/utils/payment';
import CheckIcon from '@/components/atoms/check-icon/green.vue';

export default defineComponent({
  components: {
    CheckIcon,
  },
  props: {
    serviceType: {
      type: String as PropType<PaymentType>,
    },
    selectedPaymentSetting: {
      type: Object as PropType<PaymentSetting>,
    },
    name: {
      type: String,
      default: 'payment-type',
    },
  },
  setup(props, ctx) {
    // input要素のID
    const inputId = computed(() => `${props.name}_${props.serviceType}`);
    // 選択中のサービスタイプ
    const checked = computed(() => props.selectedPaymentSetting.serviceType === props.serviceType);

    const onChageServiceType = () => {
      ctx.emit('change-type', props.serviceType);
    };

    const label = computed(() => {
      return decidePaymentTypeLabel(props.serviceType);
    });

    const decideLabelClassName = computed(() => {
      const defaultClassName = 'payment-type__label';
      switch (props.serviceType) {
        case 'komoju':
          return `${defaultClassName}--convenience-store`;
        case 'stripe':
          return `${defaultClassName}--credit-card`;
        default:
          return defaultClassName;
      }
    });
    return {
      inputId,
      checked,
      label,
      onChageServiceType,
      decideLabelClassName,
    };
  },
});
</script>
<style lang="scss" scoped>
.payment-type {
  &__radio {
    display: none;
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

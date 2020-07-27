<template>
  <div class="show-card">
    <input
      :id="inputId"
      type="radio"
      class="show-card__radio"
      :value="paymentMethod"
      :name="name"
      :checked="checked"
      @change="changePaymentMethod"
    />
    <label v-if="paymentMethod" :for="inputId" class="show-card__label">
      <div class="show-card__label-inner">
        <p class="show-card__label-text">クレジットカード</p>
        <div class="show-card__card-wrap">
          <!-- TODO: アイコン画像をassetに用意する必要あり（ないとエラー）
          <img :src="require(`@/assets/no-index/icons/${paymentMethod.card.brand}.svg`)" /> -->
          <p class="show-card__number-wrap">
            <span class="show-card__number-prefix">末尾</span>
            <span class="show-card__number">{{ paymentMethod.card.last4 }}</span>
          </p>
        </div>
      </div>
      <CheckIcon />
    </label>
    <label v-else :for="inputId" class="show-card__label">
      <span class="show-card__label-text">別のクレジットカードに変更</span>
      <span class="show-card__check-icon"></span>
      <CheckIcon />
    </label>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import CheckIcon from '@/components/atoms/check-icon/green.vue';
import { StripePaymentMethod } from '@/types/api/stripe/payment-method';

export default defineComponent({
  components: {
    CheckIcon,
  },
  props: {
    paymentMethod: {
      type: Object as PropType<StripePaymentMethod | null>,
      default: null,
    },
    selectedPaymentMethod: {
      type: Object as PropType<StripePaymentMethod | null>,
      default: null,
    },
    name: {
      type: String,
      default: 'show-card',
    },
  },
  setup(props, ctx) {
    const inputId = computed(() => `show-card_${props.paymentMethod ? props.paymentMethod.id : 'newcard'}`);
    const checked = computed(() => props.paymentMethod === props.selectedPaymentMethod);

    const changePaymentMethod = () => {
      ctx.emit('change-payment-method', props.paymentMethod);
    };

    return {
      inputId,
      changePaymentMethod,
      checked,
    };
  },
});
</script>
<style lang="scss" scoped>
.show-card {
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
    input[type='radio']:checked + & {
      border: 0.2rem solid var(--color-green);
    }
  }
  &__label {
    @include common-label;
    transition: all var(--time-checked) var(--type-checked);
  }
  &__label-text {
    font-size: 1.6rem;
  }
  &__number-wrap {
    margin-top: -0.4rem;
    padding-left: 0.8rem;
  }
  &__number-prefix {
    font-size: 1.9rem;
  }
  &__number {
    font-size: 1.9rem;
  }
  &__card-wrap {
    display: flex;
    align-items: center;
    padding-top: 0.8rem;
  }
}
</style>

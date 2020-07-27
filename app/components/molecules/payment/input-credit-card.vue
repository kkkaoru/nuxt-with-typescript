<template>
  <ul class="credit-card">
    <li class="credit-card__container">
      <StripeElement
        class="credit-card__inner"
        label="クレジットカード番号"
        element-id="cc-number"
        element-type="cardNumber"
        placeholder="xxxx-xxxx-xxxx"
        @change="onChangeCardNumber"
      />
    </li>
    <li class="credit-card__container">
      <StripeElement
        class="credit-card__inner--half"
        label="有効期限"
        element-id="cc-exp"
        element-type="cardExpiry"
        placeholder="月月/年年"
        @change="onChangeCardExpiry"
      />
      <StripeElement
        class="credit-card__inner--half"
        label="セキュリティコード"
        element-id="cc-cvc"
        element-type="cardCvc"
        annotation="カード裏面に印字された下三桁を入力してください"
        placeholder="000"
        @change="onChangeCardCvc"
      />
    </li>
    <li v-if="hasError" class="credit-card__container--errors">
      <p v-for="message in errorMessages" :key="message" class="credit-card__error-text">{{ message }}</p>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref, computed, watch } from '@vue/composition-api';
import StripeElement from './stripe-element/index.vue';
import { StripeElementInputState } from './stripe-element/types';

export default defineComponent({
  components: {
    StripeElement,
  },
  setup(_, ctx) {
    const cardNumberState = ref<StripeElementInputState | null>(null);
    const onChangeCardNumber = (state: StripeElementInputState | null) => (cardNumberState.value = state);
    const cardExpiryState = ref<StripeElementInputState | null>(null);
    const onChangeCardExpiry = (state: StripeElementInputState | null) => (cardExpiryState.value = state);
    const cardCvcState = ref<StripeElementInputState | null>(null);
    const onChangeCardCvc = (state: StripeElementInputState | null) => (cardCvcState.value = state);

    const states = computed(() => [cardNumberState.value, cardExpiryState.value, cardCvcState.value]);

    const errorMessages = computed(() => states.value.filter((s) => s && s.error).map((s) => s.error.message));
    const hasError = computed(() => errorMessages.value.length > 0);

    const complete = computed(() => {
      if (states.value.includes(null)) {
        return false;
      }
      // すべてのエレメントがcomplete状態であること
      return !states.value.some((s) => !s.complete);
    });

    // 各Stripe Elementの入力の完了状態が変化したとき、通知する
    watch(complete, () => {
      ctx.emit('complete', complete.value);
    });

    return {
      states,
      complete,
      onChangeCardNumber,
      onChangeCardExpiry,
      onChangeCardCvc,
      errorMessages,
      hasError,
    };
  },
});
</script>
<style lang="scss" scoped>
.credit-card {
  padding-top: var(--size-sp-safe-space);
  &__container {
    display: flex;
    justify-content: space-between;
    padding: 0 2.4rem;
    & + & {
      padding-top: 0.8rem;
    }
    &--errors {
      padding: 0 2.4rem;
    }
  }
  &__inner {
    display: flex;
    flex-direction: column;
    width: 100%;
    &--half {
      display: flex;
      flex-direction: column;
      width: 48.5%;
    }
  }
  &__error-text {
    display: block;
    padding: 0.4rem 0.8rem 0;
    color: var(--color-red);
    font-size: 1.1rem;
  }
}
</style>

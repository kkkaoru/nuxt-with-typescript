<template>
  <div class="license-card">
    <aside class="license-card__aside">
      <ul v-if="hasLicense" class="license-card__aside-list">
        <li class="license-card__aside-container">
          <span class="license-card__aside-tag--licensed">加入中</span>
        </li>
      </ul>
    </aside>
    <div class="license-card__main">
      <ul v-if="hasMessages" class="license-card__message-list">
        <li v-if="remarkableMessage" class="license-card__message-container">
          <PaymentErrorMsg :message="remarkableMessage" />
        </li>
        <li v-if="waitingPaymentMessage" class="license-card__message-container">
          <WaitingPaymentMsg :message="waitingPaymentMessage" />
        </li>
      </ul>
      <div class="license-card__container">
        <p class="license-card__name">{{ license.name }}</p>
        <pre class="license-card__description">{{ license.description }}</pre>
        <p class="license-card__price-wrap">
          <PriceDisplayText :amount="license.payAmount" :payment-setting="paymentSetting" />
        </p>
      </div>
      <div class="license-card__button-wrap">
        <BlueButton v-show="hasLicense" :to="`/licenses/${license.slug}`" text="詳細" />
        <GreenButton v-show="!hasLicense" :to="`/licenses/${license.slug}`" text="加入する" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { mdiInformation } from '@mdi/js';
import { License } from '@/types/api/license';
import { PaymentSetting } from '@/types/api/payment-setting';
import PaymentErrorMsg from '@/components/atoms/message/payment-error.vue';
import WaitingPaymentMsg from '@/components/atoms/message/waiting-payment.vue';
import MdiIcon from '@/components/atoms/mdi-icon/index.vue';
import GreenButton from '@/components/atoms/button/link/green.vue';
import BlueButton from '@/components/atoms/button/link/blue.vue';
import PriceDisplayText from '@/components/atoms/license/price-with-period.vue';

export default defineComponent({
  components: {
    PriceDisplayText,
    GreenButton,
    BlueButton,
    MdiIcon,
    PaymentErrorMsg,
    WaitingPaymentMsg,
  },
  props: {
    license: {
      type: Object as PropType<License>,
      required: true,
    },
    hasLicense: {
      type: Boolean,
      default: false,
    },
    waitingPaymentMessage: {
      type: String,
      default: null,
    },
    remarkableMessage: {
      type: String,
      default: null,
    },
    paymentSetting: {
      type: Object as PropType<PaymentSetting>,
      required: true,
    },
  },
  setup(props) {
    const hasMessages = computed(() => props.waitingPaymentMessage !== null || props.remarkableMessage !== null);
    return {
      hasMessages,
      mdiInformation,
    };
  },
});
</script>
<style lang="scss" scoped>
$sentence-font-size: 1.3rem;
$card-radius: 1.2rem;
.license-card {
  width: 100%;
  padding: var(--size-sp-safe-space) var(--size-sp-safe-space) 2.4rem;
  background-color: var(--color-white);
  border-radius: $card-radius;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2);
  &__aside-tag {
    @mixin tag-style($bg-color, $font-color) {
      padding: 0.4rem 1.6rem;
      color: $font-color;
      font-weight: bold;
      font-size: 1.3rem;
      background-color: $bg-color;
      border-radius: $card-radius;
    }
    &--licensed {
      @include tag-style(var(--color-blue), #fff);
    }
  }
  &__container {
    padding-top: 0.8rem;
  }
  &__name {
    color: rgba(var(--color-black-rgb), 0.9);
    font-weight: bold;
  }
  &__description {
    padding-top: 0.4rem;
    color: rgba(var(--color-black-rgb), 0.7);
    font-size: $sentence-font-size;
  }
  &__price-wrap {
    padding-top: 0.4rem;
  }
  &__button-wrap {
    box-sizing: content-box;
    height: 5.6rem;
    padding-top: var(--size-sp-safe-space);
  }
  &__message-list {
    padding-top: 1.6rem;
  }
  &__message-container {
    & + & {
      padding-top: 0.4rem;
    }
  }
}
</style>

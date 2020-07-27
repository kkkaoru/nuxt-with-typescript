<template>
  <div class="registration">
    <h2 class="registration__title">
      <span class="registration__title-text">ご登録情報</span>
    </h2>
    <form name="registration">
      <ul class="registration__list">
        <li class="registration__container">
          <h3 class="registration__title--sub">お支払い方法</h3>
          <ShowCreditCard
            v-if="isShowRegisterdCreditCards"
            :cards="registration.creditCards"
            :active="inputs.activeCard"
            @change-active-card="onChangeActiveCard"
          />
          <PaymentTypeCompoennt v-else :payment-types="[registration.paymentType]" :active="registration.paymentType" />
          <PaymentHelp />
        </li>
        <li v-show="isShowCreditCardInputs" class="registration__container">
          <h3 class="registration__title--sub">カード情報を入力してください</h3>
          <CreditCardInputsComponent :errors="ccErrors" :credit-card="inputs.creditCardInputs" />
        </li>
        <li class="registration__container">
          <h3 class="registration__title--sub">お支払いサイクル</h3>
          <PeriodComponent :periods="[registration.period]" :active="registration.period" />
        </li>
        <li v-if="canChangePayment" class="registration__container">
          <div class="registration__button-wrap">
            <ButtonBlue text="お支払い情報を変更する" @click="onRequestChange" />
          </div>
        </li>
        <li v-if="canRetryPayment" class="registration__container">
          <div class="registration__button-wrap">
            <ButtonGreen text="お支払いを再実行する" @click="onRequestRetry" />
          </div>
        </li>
      </ul>
    </form>
    <ChangeRegistrationModal
      :name="changeModalName"
      :status="modalStatus"
      @submit="onSubmitChange"
      @close-modal="onCloseModal"
    />
    <RetryPaymentModal
      :name="retryModalName"
      :status="retryModalStatus"
      @submit="onSubmitRetry"
      @close-modal="onCloseRetryModal"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, SetupContext, computed } from '@vue/composition-api';
import { RegistrationInputs } from './types';
import { ModalStatusType } from '@/types/modal';
import { SubscribedInformation, DisplayCreditCardInformation, CreditCardInputErrors } from '@/types/payment';
import PaymentTypeCompoennt from '@/components/molecules/payment/payment-types.vue';
import ShowCreditCard from '@/components/molecules/payment/show-credit-card.vue';
import PaymentHelp from '@/components/molecules/payment/payment-help/index.vue';
import PeriodComponent from '@/components/molecules/payment/payment-periods.vue';
import ButtonBlue from '@/components/atoms/button/buttonTag/blue.vue';
import ButtonGreen from '@/components/atoms/button/buttonTag/green.vue';
import CreditCardInputsComponent from '@/components/molecules/payment/input-credit-card.vue';
import ChangeRegistrationModal from '@/components/molecules/modal/change-registration/index.vue';
import RetryPaymentModal from '@/components/molecules/modal/retry-payment/index.vue';

export default defineComponent({
  components: {
    PaymentHelp,
    PeriodComponent,
    ButtonBlue,
    ButtonGreen,
    ShowCreditCard,
    CreditCardInputsComponent,
    ChangeRegistrationModal,
    PaymentTypeCompoennt,
    RetryPaymentModal,
  },
  props: {
    registration: {
      type: Object as PropType<SubscribedInformation>,
    },
    modalStatus: {
      type: String as PropType<ModalStatusType>,
    },
    inputs: {
      type: Object as PropType<RegistrationInputs>,
    },
    ccErrors: {
      type: Object as PropType<CreditCardInputErrors>,
    },
    changeModalName: {
      type: String,
    },
    canRetryPayment: {
      type: Boolean,
      default: false,
    },
    retryModalName: {
      type: String,
    },
    retryModalStatus: {
      type: String as PropType<ModalStatusType>,
    },
  },
  setup(props, ctx: SetupContext) {
    const isShowRegisterdCreditCards =
      props.registration.creditCards.length !== 0 && props.registration.paymentType === 'stripe';
    const canChangePayment = isShowRegisterdCreditCards && !props.canRetryPayment;
    const isShowCreditCardInputs = computed(() => {
      if (props.inputs === null) {
        return false;
      }
      return props.inputs.activeCard === null;
    });
    const onChangeActiveCard = (card: DisplayCreditCardInformation | null) => {
      ctx.emit('change-active-card', card);
    };
    const onRequestChange = () => {
      ctx.emit('request-change-registration');
    };
    const onSubmitChange = () => {
      ctx.emit('submit-change-registration');
    };
    const onCloseModal = () => {
      ctx.emit('close-modal');
    };
    const onRequestRetry = () => {
      ctx.emit('request-retry-payment');
    };
    const onSubmitRetry = () => {
      ctx.emit('submit-retry-payment');
    };
    const onCloseRetryModal = () => {
      ctx.emit('close-retry-modal');
    };
    return {
      isShowRegisterdCreditCards,
      isShowCreditCardInputs,
      onChangeActiveCard,
      onRequestChange,
      onSubmitChange,
      onCloseModal,
      canChangePayment,
      onRequestRetry,
      onSubmitRetry,
      onCloseRetryModal,
    };
  },
});
</script>
<style lang="scss" scoped>
@import './mixins.scss';

.registration {
  @include common-list-layout;
}
</style>

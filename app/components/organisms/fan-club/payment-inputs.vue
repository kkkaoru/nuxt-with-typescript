<template>
  <div class="payment">
    <h2 class="payment__title"><span class="payment__title-text">ファンクラブに加入する</span></h2>
    <form name="payment">
      <ul class="payment__list">
        <li class="payment__container">
          <h3 class="payment__title--sub">お支払い方法を選んでください</h3>
          <PaymentTypeComponent
            :payment-types="paymentTypesInMethods"
            :active="fanclubInputs.paymentInputs.type"
            @change-type="changePaymentType"
          />
          <PaymentHelp />
        </li>
        <li class="payment__container">
          <h3 class="payment__title--sub">お支払いサイクルを選んでください</h3>
          <PaymentPeriodsComponent
            :periods="fanclubInputs.paymentInputs.showPeriods"
            :active="fanclubInputs.paymentInputs.period"
            @change-period="changePaymentPeriod"
          />
        </li>
        <li v-show="fanclubInputs.paymentInputs.type === 'stripe'" class="payment__container">
          <h3 class="payment__title--sub">カード情報を入力してください</h3>
          <CreditCardInputsComponent
            :credit-card="ccInputs"
            :errors="ccErrors"
            @update-inputs="onUpdateCreditCardInputs"
          />
        </li>
        <li class="payment__container">
          <div class="payment__button-wrap">
            <ButtonGreen text="ファンクラブに加入する" :enabled="isEnabledButton" @click="clickJoin" />
          </div>
          <PaymentAnnotation />
        </li>
      </ul>
    </form>
    <AccecptPaymentModal
      :name="modalName"
      :status="modalStatus"
      @submit="onSubmitPayment"
      @close-modal="onCloseModal"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, SetupContext, PropType, computed } from '@vue/composition-api';
import { FanClubInputs } from './types';
import { ModalStatusType } from '@/types/modal';
import { PaymentType } from '@/types/api/payment-setting';
import { PaymentPeriod, CreditCardInputs, CreditCardInputErrors } from '@/types/payment';
import { findPaymentTypesInPaymentMethods, isValidCreditCardInput } from '@/utils/payment';

import PaymentTypeComponent from '@/components/molecules/payment/payment-types.vue';
import PaymentPeriodsComponent from '@/components/molecules/payment/payment-periods.vue';
import PaymentHelp from '@/components/molecules/payment/payment-help/index.vue';
import ButtonGreen from '@/components/atoms/button/buttonTag/green.vue';
import PaymentAnnotation from '@/components/molecules/payment/payment-annoation/index.vue';
import CreditCardInputsComponent from '@/components/molecules/payment/input-credit-card.vue';
import AccecptPaymentModal from '@/components/molecules/modal/accept-payment/index.vue';

export default defineComponent({
  components: {
    PaymentTypeComponent,
    PaymentHelp,
    PaymentPeriodsComponent,
    ButtonGreen,
    PaymentAnnotation,
    CreditCardInputsComponent,
    AccecptPaymentModal,
  },
  props: {
    fanclubInputs: {
      type: Object as PropType<FanClubInputs>,
    },
    ccInputs: {
      type: Object as PropType<CreditCardInputs>,
    },
    modalName: {
      type: String,
    },
    modalStatus: {
      type: String as PropType<ModalStatusType>,
      default: null,
    },
    ccErrors: {
      type: Object as PropType<CreditCardInputErrors>,
    },
  },
  setup(props, ctx: SetupContext) {
    const paymentTypesInMethods = findPaymentTypesInPaymentMethods(props.fanclubInputs.paymentMethods);
    const isEnabledButton = computed(() => {
      return isValidCreditCardInput(props.ccErrors);
    });
    const clickJoin = () => {
      ctx.emit('click-join');
    };
    const onSubmitPayment = () => {
      ctx.emit('submit-payment');
    };
    const onCloseModal = () => {
      ctx.emit('close-payment-modal');
    };
    const changePaymentType = (type: PaymentType) => {
      ctx.emit('change-type', type);
    };
    const changePaymentPeriod = (period: PaymentPeriod) => {
      ctx.emit('change-period', period);
    };
    const onUpdateCreditCardInputs = (inputs: CreditCardInputs) => {
      ctx.emit('update-credit-card', inputs);
    };
    return {
      clickJoin,
      onSubmitPayment,
      onCloseModal,
      changePaymentType,
      changePaymentPeriod,
      paymentTypesInMethods,
      onUpdateCreditCardInputs,
      isEnabledButton,
    };
  },
});
</script>
<style lang="scss" scoped>
@import './mixins.scss';

.payment {
  @include common-list-layout;
}
</style>

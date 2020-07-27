<template>
  <div class="waiting-registration">
    <h2 class="waiting-registration__title">
      <span class="waiting-registration__title-text">ご登録情報</span>
    </h2>
    <form name="waiting-registration">
      <ul class="waiting-registration__list">
        <li class="waiting-registration__container">
          <h3 class="waiting-registration__title--sub">お支払い方法</h3>
          <PaymentTypeComponent :payment-types="[paymentType]" :active="paymentType" />
        </li>
        <li class="waiting-registration__container">
          <h3 class="waiting-registration__title--sub">お支払いサイクル</h3>
          <PaymentPeriodComponent :periods="[period]" :active="period" />
          <div class="waiting-registration__button-wrap">
            <ButtonRed text="お支払いを中止する" @click="onClickCancel" />
          </div>
          <PaymentAnnotation />
        </li>
      </ul>
    </form>
    <CancelModal :name="modalName" :status="modalStatus" @submit="onSubmit" @close-modal="onCloseModal" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, SetupContext } from '@vue/composition-api';
import { PaymentType } from '@/types/api/payment-setting';
import { PaymentPeriod } from '@/types/payment';
import { ModalStatusType } from '@/types/modal';
import PaymentTypeComponent from '@/components/molecules/payment/payment-types.vue';
import PaymentPeriodComponent from '@/components/molecules/payment/payment-periods.vue';
import ButtonRed from '@/components/atoms/button/buttonTag/red.vue';
import PaymentAnnotation from '@/components/molecules/payment/payment-annoation/index.vue';
import CancelModal from '@/components/molecules/modal/cancel-payment/index.vue';
export default defineComponent({
  components: {
    PaymentTypeComponent,
    PaymentPeriodComponent,
    ButtonRed,
    PaymentAnnotation,
    CancelModal,
  },
  props: {
    paymentType: {
      type: String as PropType<PaymentType>,
    },
    period: {
      type: Object as PropType<PaymentPeriod>,
    },
    modalName: {
      type: String,
    },
    modalStatus: {
      type: String as PropType<ModalStatusType>,
    },
  },
  setup(props, ctx: SetupContext) {
    const onClickCancel = () => {
      ctx.root.$modal.show(props.modalName);
    };
    const onSubmit = () => {
      ctx.emit('submit-cancel');
    };
    const onCloseModal = () => {
      ctx.emit('close-cancel');
    };
    return {
      onClickCancel,
      onSubmit,
      onCloseModal,
    };
  },
});
</script>
<style lang="scss" scoped>
@import './mixins.scss';

.waiting-registration {
  @include common-list-layout;
}
</style>

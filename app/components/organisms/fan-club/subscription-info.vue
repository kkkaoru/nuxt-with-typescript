<template>
  <div class="subscription">
    <div v-if="hasPaymentPlan" class="subscription__wrap">
      <h2 class="subscription__title">
        <span class="subscription__title-text">次回お支払い予定</span>
      </h2>
      <form name="subscription">
        <ul class="subscription__list">
          <li class="subscription__container">
            <p class="subscription__description-wrap">
              <DateTimeInMinutes :date="expire" />
              <span class="subscription__description-text">にお支払いを予定しています。</span>
            </p>
            <div class="subscription__button-wrap">
              <ButtonRed text="お支払いを停止する" @click="onRequestStopSubscription" />
            </div>
            <PaymentAnnotation />
          </li>
        </ul>
      </form>
    </div>
    <div v-else class="subscription__wrap">
      <h2 class="subscription__title">
        <span class="subscription__title-text">有効期限</span>
      </h2>
      <ul class="subscription__list">
        <li class="subscription__container">
          <p class="subscription__description-wrap">
            <span class="subscription__description-text">現在お支払いを停止しています。</span>
          </p>
          <p class="subscription__description-wrap">
            <DateTimeInMinutes :date="expire" />
            <span class="subscription__description-text">をすぎると、限定コンテンツを閲覧できなくなります。</span>
          </p>
        </li>
      </ul>
    </div>
    <StopSubscriptionModal
      :name="modalName"
      :status="modalStatus"
      @close-modal="onCloseModal"
      @submit="onSubmitStopSubscription"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, SetupContext, PropType } from '@vue/composition-api';
import { ModalStatusType } from '@/types/modal';
import DateTimeInMinutes from '@/components/atoms/date-time/in-minutes.vue';
import PaymentAnnotation from '@/components/molecules/payment/payment-annoation/index.vue';
import ButtonRed from '@/components/atoms/button/buttonTag/red.vue';
import StopSubscriptionModal from '@/components/molecules/modal/stop-subscription/index.vue';

export default defineComponent({
  props: {
    expire: {
      type: String,
    },
    modalName: {
      type: String,
    },
    modalStatus: {
      type: String as PropType<ModalStatusType>,
    },
    hasPaymentPlan: {
      type: Boolean,
      default: true,
    },
  },
  components: {
    DateTimeInMinutes,
    PaymentAnnotation,
    ButtonRed,
    StopSubscriptionModal,
  },
  setup(_, ctx: SetupContext) {
    const onRequestStopSubscription = () => {
      ctx.emit('request-stop-subscription');
    };
    const onSubmitStopSubscription = () => {
      ctx.emit('submit-stop-subscription');
    };
    const onCloseModal = () => {
      ctx.emit('close-modal');
    };
    return {
      onRequestStopSubscription,
      onSubmitStopSubscription,
      onCloseModal,
    };
  },
});
</script>
<style lang="scss" scoped>
@import './mixins.scss';

.subscription {
  @include common-list-layout;
  &__description-wrap {
    padding: 0 var(--size-sp-safe-space);
    color: rgba(11, 13, 45, 0.7);
    font-size: 0;
  }
  &__description-text {
    font-size: var(--size-font-default);
  }
}
</style>

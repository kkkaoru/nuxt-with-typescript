<template>
  <div class="joined-license">
    <h3 class="joined-license__name">{{ title }}</h3>
    <div v-if="warningText" class="joined-license__text-wrap">
      <PaymentErrorMsg :message="warningText" />
    </div>
    <div v-else-if="annotationText" class="joined-license__text-wrap">
      <WaitingPayment :message="annotationText" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import PaymentErrorMsg from '@/components/atoms/message/payment-error.vue';
import WaitingPayment from '@/components/atoms/message/waiting-payment.vue';

export default defineComponent({
  components: {
    PaymentErrorMsg,
    WaitingPayment,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    warningText: {
      type: String,
      required: false,
    },
    annotationText: {
      type: String,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.joined-license {
  display: flex;
  flex-direction: column;
  padding: 1.6rem 0.8rem;
  border: solid 0.2rem var(--color-gray);
  border-radius: 0.6rem;
  &__name {
    color: rgba(var(--color-black-rgb), 0.9);
    font-size: 1.6rem;
  }
  &__text-wrap {
    padding-top: 0.4rem;
  }
}
</style>

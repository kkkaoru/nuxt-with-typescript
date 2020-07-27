<template>
  <ul class="payment-type">
    <li class="payment-type__container">
      <h3 class="payment-type__title--sub">お支払い方法</h3>
      <ServiceTypeSelector :amount="amount" :service-types="serviceTypes" :selected-payment-setting="paymentSetting" />
      <PaymentHelp />
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import ServiceTypeSelector from '@/components/organisms/payment-setting/selectors/service-type/index.vue';
import PaymentHelp from '@/components/molecules/payment/payment-help/index.vue';
import { PaymentSetting } from '~/types/api/payment-setting';

export default defineComponent({
  components: {
    PaymentHelp,
    ServiceTypeSelector,
  },
  props: {
    amount: {
      type: Number,
      required: true,
    },
    paymentSetting: {
      type: Object as PropType<PaymentSetting>,
      required: true,
    },
  },
  setup(props) {
    const serviceTypes = computed(() => [props.paymentSetting.serviceType]);
    return {
      serviceTypes,
    };
  },
});
</script>
<style lang="scss" scoped>
.payment-type {
  &__container {
    margin-bottom: 2.7rem;
    box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.2);
  }
}
</style>

<template>
  <LicenseBaseCard
    :license="license"
    :has-license="hasLicense"
    :payment-setting="DEFAULT_PAYMENT_SETTING"
    :remarkable-message="remarkableMessage"
    :waiting-payment-message="waitingPaymentMessage"
  />
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import { DEFAULT_PAYMENT_SETTING } from './statics';
import LicenseBaseCard from './base.vue';
import { LicenseSummary } from '@/types/api/license';
import { Order } from '@/types/api/order';
import { UserLicense } from '@/types/api/user-license';
import { PaymentType } from '@/types/api/payment-setting';

const findOrdersByLicense = (orders: Order[], license: LicenseSummary): Order[] => {
  if (orders.length === 0) {
    return [];
  }
  return orders.filter((order: Order) => license.slug === order.product.slug);
};

const hasPaymentTypeOrder = (orders: Order[], type: PaymentType): boolean => {
  if (orders.length === 0) {
    return false;
  }
  return orders.some((order: Order) => order.paymentSetting.serviceType === type);
};

export default defineComponent({
  components: {
    LicenseBaseCard,
  },
  props: {
    license: {
      type: Object as PropType<LicenseSummary>,
      required: true,
    },
    userLicenses: {
      type: Array as PropType<UserLicense[]>,
      default: () => [] as UserLicense[],
    },
    incompleteOrders: {
      type: Array as PropType<Order[]>,
      default: () => [] as Order[],
    },
  },
  setup(props) {
    const filteredOrders = computed<Order[]>(() => findOrdersByLicense(props.incompleteOrders, props.license));
    const waitingPaymentMessage = computed<string | null>(() => {
      return hasPaymentTypeOrder(filteredOrders.value as Order[], 'komoju')
        ? 'コンビニでのお支払いをお待ちしております'
        : null;
    });
    const remarkableMessage = computed<string | null>(() => {
      return hasPaymentTypeOrder(filteredOrders.value as Order[], 'stripe')
        ? '定期購入が完了していません。お支払い情報を確認して下さい。'
        : null;
    });
    const hasLicense = computed(() => {
      return props.userLicenses.some((userLicense: UserLicense) => {
        return userLicense.license.slug === props.license.slug;
      });
    });
    return {
      DEFAULT_PAYMENT_SETTING,
      hasLicense,
      waitingPaymentMessage,
      remarkableMessage,
    };
  },
});
</script>

<template>
  <div class="payment-type">
    <ul class="payment-type__list">
      <li v-for="(type, index) in serviceTypes" :key="index" class="payment-type__container">
        <ServiceTypeItem
          :service-type="type"
          :selected-payment-setting="selectedPaymentSetting"
          @change-type="changeType"
        />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from '@vue/composition-api';
import ServiceTypeItem from './item.vue';
import { PaymentType, PaymentSetting } from '@/types/api/payment-setting';
import { decidePaymentTypeLabel } from '@/utils/payment';
import CheckIcon from '@/components/atoms/check-icon/green.vue';

export default defineComponent({
  components: {
    CheckIcon,
    ServiceTypeItem,
  },
  props: {
    serviceTypes: {
      type: Array as PropType<PaymentType[]>,
      default: [] as PaymentType[],
    },
    selectedPaymentSetting: {
      type: Object as PropType<PaymentSetting>,
    },
    name: {
      type: String,
      default: 'payment-type',
    },
  },
  setup(props, ctx) {
    // 選択中のサービスタイプ
    const activeServiceType = computed(() => props.selectedPaymentSetting.serviceType);

    const changeType = (type: PaymentType) => {
      ctx.emit('change-type', type);
    };

    return {
      activeServiceType,
      decidePaymentTypeLabel,
      changeType,
    };
  },
});
</script>
<style lang="scss" scoped>
.payment-type {
  padding-top: var(--size-sp-safe-space);
  &__container {
    padding: 0 2.4rem;
    & + & {
      padding-top: 0.8rem;
    }
  }
}
</style>

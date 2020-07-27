<template>
  <div class="licenses">
    <ul class="licenses__list">
      <li v-for="license in licenses" :key="license.slug" class="licenses__container">
        <LicenseCard :license="license" :user-licenses="userLicenses" :incomplete-orders="incompleteOrders" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import { LicenseSummary } from '@/types/api/license';
import { Order } from '@/types/api/order';
import { UserLicense } from '@/types/api/user-license';
import LicenseCard from '@/components/molecules/license/card/convert.vue';

export default defineComponent({
  components: {
    LicenseCard,
  },
  props: {
    licenses: {
      type: Array as PropType<LicenseSummary[]>,
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
});
</script>
<style lang="scss" scoped>
.licenses {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--size-sp-safe-space) var(--size-sp-safe-space) 3.2rem;
  background-color: var(--color-white-darkest);
  &__list {
    width: 100%;
    max-width: var(--size-card-max-width);
  }
  &__container {
    width: 100%;
    & + & {
      padding-top: var(--size-sp-safe-space);
    }
  }
}
</style>
